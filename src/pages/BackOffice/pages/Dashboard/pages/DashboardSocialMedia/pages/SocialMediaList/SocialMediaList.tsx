import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import { client } from "@/instance";
import type { SocialMedia } from "@/clients/KeepUpClient/Ressources/types";

export default function SocialMediaList() {
  const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSocialMedias = async () => {
      try {
        const data = await client.socialMedia.list();
        setSocialMedias(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch social media");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedias();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="social-media-list">
      {socialMedias.map((social) => (
        <DashboardCard
          key={social.id}
          id={social.id}
          title={social.label}
          name="social-media"
        />
      ))}
    </section>
  );
}
