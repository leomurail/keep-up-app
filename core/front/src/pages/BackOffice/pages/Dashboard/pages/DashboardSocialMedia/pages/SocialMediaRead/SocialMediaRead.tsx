import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/shadcdn/ui/table";
import { client } from "@/instance";
import type { SocialMedia } from "@/clients/KeepUpClient/Ressources/types";
import { getConfig } from "@/utils";

export default function SocialMediaRead() {
  const { id } = useParams<{ id: string }>();
  const [socialMedia, setSocialMedia] = useState<SocialMedia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchSocialMedia = async () => {
      try {
        const data = await client.socialMedia.get(id);
        setSocialMedia(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch social media");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!socialMedia) return <div>Social Media not found</div>;

  return (
    <section id="social-media-read" className="read-table">
      <Table>
        <TableBody>
          <TableRow className="w-[30%]">
            <TableCell className="text-center font-bold">Nom</TableCell>
            <TableCell>{socialMedia.label}</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center font-bold">Slug</TableCell>
            <TableCell>{socialMedia.slug}</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center font-bold">Image</TableCell>
            <TableCell>
              {socialMedia.image ? (
                <img
                  src={getConfig("VITE_API_URL") + "/api/images/" + socialMedia.image.src}
                  alt={socialMedia.image.alt || socialMedia.label}
                  width={150}
                  height={150}
                  style={{ width: "150px" }}
                />
              ) : (
                "No Image"
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
