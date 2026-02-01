import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import AirdropForm from "../../components/AirdropForm/AirdropForm";
import { keepUpClientApi } from "@/pages/BackOffice/instances";

export default function AirdropUpdate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      category: "",
      status: "",
      link: "",
      description: "",
      SocialMedia: []
    },
  });

  useEffect(() => {
    if (!id) return;
    const fetchAirdrop = async () => {
      try {
        const airdrop = await keepUpClientApi.airdropEvent.get(id);
        form.reset({
          name: airdrop.title,
          description: airdrop.text,
          link: airdrop.claimLink,
          category: airdrop.category?.id?.toString(),
          status: airdrop.status?.id?.toString(),
          socialMedia: airdrop.socialMedia?.map(item => ({
            type: item.socialMedia?.id?.toString(),
            link: item.link
          })) || []
        });
      } catch (e) {
        console.error("Failed to fetch airdrop", e);
      }
    };
    fetchAirdrop();
  }, [id, form]);

  const handleSubmit = async (data: any) => {
    if (!id) return;
    try {
      let imageId: number | undefined;

      if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
        const uploadedImage = await keepUpClientApi.image.upload(data.image[0]);
        imageId = uploadedImage.id;
      }

      const payload: any = {
        title: data.name,
        text: data.description,
        claimLink: data.link,
        ...(imageId && { imageId }),
        categoryId: data.category,
        statusId: data.status,
        socialMedia: data.socialMedia?.map((smItem: any) => {
          return smItem.type ? { socialMediaId: parseInt(smItem.type), link: smItem.link } : null;
        }).filter(Boolean)
      };

      await keepUpClientApi.airdropEvent.update(id, payload);
      navigate("/back-office/dashboard/airdrop/list");
    } catch (e) {
      console.error("Failed to update airdrop", e);
    }
  };

  return (
    <section id="airdrop-create">
      <AirdropForm form={form} onSubmit={handleSubmit} />
    </section>
  );
}
