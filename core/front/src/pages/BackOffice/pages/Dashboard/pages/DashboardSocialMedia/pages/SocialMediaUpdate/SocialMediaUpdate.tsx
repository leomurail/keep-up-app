import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import SocialMediaForm from "../../components/SocialMediaForm/SocialMediaForm";
import { client } from "@/instance";

export default function SocialMediaUpdate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  useEffect(() => {
    if (!id) return;
    const fetchSocialMedia = async () => {
      try {
        const data = await client.socialMedia.get(id);
        form.reset({
          name: data.label,
          slug: data.slug,
          // Image handling todo
        });
      } catch (e) {
        console.error("Failed to fetch social media", e);
      }
    };
    fetchSocialMedia();
  }, [id, form]);

  const handleSubmit = async (data: any) => {
    if (!id) return;
    try {
      let imageId: number | undefined;

      if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
        const uploadedImage = await client.images.upload(data.image[0]);
        imageId = uploadedImage.id;
      }

      await client.socialMedia.update(id, {
        label: data.name,
        slug: data.slug,
        ...(imageId && { imageId }),
      });
      navigate("/back-office/dashboard/social-media/list");
    } catch (e) {
      console.error("Failed to update social media", e);
    }
  };

  return (
    <section id="social-media-update">
      <SocialMediaForm form={form} onSubmit={handleSubmit} />
    </section>
  );
}
