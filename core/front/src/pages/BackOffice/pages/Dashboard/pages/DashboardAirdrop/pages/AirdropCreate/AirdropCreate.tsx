import { useNavigate } from "react-router";
import AirdropForm from "../../components/AirdropForm/AirdropForm";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function AirdropCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      let imageId: number | undefined;

      if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
        const file = data.image[0];
        const uploadedImage = await keepUpClient.image.upload(file);
        imageId = uploadedImage.id;
      }

      const payload: any = {
        title: data.name,
        text: data.description,
        claimLink: data.link,
        imageId,
        statusId: data.status,
        categoryId: data.category,
        socialMedia: data.socialMedia?.map((smItem: any) => {
          return smItem.type ? { socialMediaId: parseInt(smItem.type), link: smItem.link } : null;
        }).filter(Boolean)
      };

      await keepUpClient.airdropEvent.create(payload);
      navigate("/back-office/dashboard/airdrop/list");
    } catch (e) {
      console.error("Failed to create airdrop", e);
    }
  };

  return (
    <section id="airdrop-create">
      <AirdropForm onSubmit={handleSubmit} />
    </section>
  );
}
