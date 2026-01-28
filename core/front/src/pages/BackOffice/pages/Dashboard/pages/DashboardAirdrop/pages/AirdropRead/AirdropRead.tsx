import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/shadcdn/ui/table";
import { Button } from "@/components/shadcdn/ui/button";
import { client } from "@/instance";
import type { AirdropEvent } from "@/clients/KeepUpClient/Ressources/types";
import { getConfig } from "@/utils";

export default function AirdropRead() {
  const { id } = useParams<{ id: string }>();
  const [airdrop, setAirdrop] = useState<AirdropEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchAirdrop = async () => {
      try {
        const data = await client.airdropEvents.get(id);
        setAirdrop(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch airdrop");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAirdrop();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!airdrop) return <div>Airdrop not found</div>;

  return (
    <section id="airdrop-read" className="read-table">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-center w-[30%]">Titre</TableCell>
            <TableCell className="w-[70%]">{airdrop.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Category</TableCell>
            <TableCell className="w-[70%]">
              {airdrop.category?.label || "No Category"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Image</TableCell>
            <TableCell className="w-[70%]">
              {airdrop.image ? (
                <img
                  src={getConfig("VITE_API_URL") + "/api/images/" + airdrop.image.src}
                  width={120}
                  height={120}
                  alt={airdrop.image.alt || "Airdrop logo"}
                />
              ) : (
                "No Image"
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Statut</TableCell>
            <TableCell className="w-[70%]">
              {airdrop.status?.label || "No Status"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Lien</TableCell>
            <TableCell className="w-[70%]">
              {airdrop.claimLink ? (
                <Button asChild>
                  <Link to={airdrop.claimLink} target="_blank" rel="noopener noreferrer">
                    Claim
                  </Link>
                </Button>
              ) : (
                "No Claim Link"
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Text</TableCell>
            <TableCell className="w-[70%]">
              <p>{airdrop.text || "No Description"}</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">
              Réseaux sociaux
            </TableCell>
            <TableCell className="w-[70%]">
              <div className="social-medias flex gap-4 flex-wrap">
                {airdrop.socialMedia && airdrop.socialMedia.length > 0
                  ? airdrop.socialMedia.map((sm) => (
                    <div key={sm.id} className="flex flex-col items-center">
                      {sm.socialMedia?.image ? (
                        <img
                          src={getConfig("VITE_API_URL") + "/api/images/" + sm.socialMedia.image.src}
                          width={25}
                          height={25}
                          alt={sm.socialMedia.label}
                        />
                      ) : (
                        <div style={{ width: 25, height: 25, background: "#ccc" }} />
                      )}
                      <span className="social-name">
                        {sm.socialMedia?.label || "Unknown"}
                      </span>
                      {sm.link && (
                        <Link to={sm.link} target="_blank" className="text-xs text-blue-500 hover:underline">
                          View
                        </Link>
                      )}
                    </div>
                  ))
                  : "No Social Media"}
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
