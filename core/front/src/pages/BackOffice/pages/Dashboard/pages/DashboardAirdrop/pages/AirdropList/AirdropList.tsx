import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import type { AirdropEvent } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function AirdropList() {
  const [airdrops, setAirdrops] = useState<AirdropEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const data = await keepUpClient.airdropEvent.list();
        setAirdrops(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch airdrops");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAirdrops();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="airdrop-list">
      {airdrops.map((airdrop) => (
        <DashboardCard
          key={airdrop.id}
          id={airdrop.id}
          label={airdrop.title}
          name="airdrop"
        />
      ))}
    </section>
  );
}
