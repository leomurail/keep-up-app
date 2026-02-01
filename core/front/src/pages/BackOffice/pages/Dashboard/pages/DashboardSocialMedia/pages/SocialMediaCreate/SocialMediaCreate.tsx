import { useNavigate } from "react-router";
import SocialMediaForm from "../../components/SocialMediaForm/SocialMediaForm";
import { keepUpClientApi } from "@/pages/BackOffice/instances";

export default function SocialMediaCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      let imageId: number | undefined;

      if (data.file && data.file.length > 0 && data.file[0] instanceof File) {
        const file = data.file[0];
        const uploadedImage = await keepUpClientApi.image.upload(file, "test alt");
        imageId = uploadedImage.id;
      }

      await keepUpClientApi.socialMedia.create({
        label: data.name,
        slug: data.slug,
        imageId,
      });
      navigate("/back-office/dashboard/social-media/list");
    } catch (e) {
      console.error("Failed to create social media", e);
    }
  };

  return (
    <section id="social-media-create">
      <SocialMediaForm onSubmit={handleSubmit} />
    </section>
  );
}
