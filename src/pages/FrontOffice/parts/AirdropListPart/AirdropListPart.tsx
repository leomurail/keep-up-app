import { useEffect, useState } from "react";
import "./AirdropListPart.css";
import Button from "../../components/Button/Button";
import CardAirdrop from "../../components/CardAirdrop/CardAirdrop";
import SearchBar from "../../components/SearchBar/SearchBar";
import { client } from "@/instance";
import type { AirdropEvent } from "@/clients/KeepUpClient/Ressources/types";

export default function AirdropListPart() {
  const [airdrops, setAirdrops] = useState<AirdropEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const data = await client.airdropEvents.list();
        setAirdrops(data);
      } catch (err) {
        setError("Failed to fetch airdrops");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAirdrops();
  }, []);

  return (
    <section id="airdrop-list-part">
      <div id="airdrop-search-part">
        <h2>Les Airdrops les plus prometteurs </h2>
        <SearchBar placeholder="Rechercher un airdrop..." />
      </div>
      <div id="aidrop-liste-content">
        <h3>Notre Sélection</h3>
        <div id="airdrops-cards-content">
          {loading ? (
            <p>Chargement des airdrops...</p>
          ) : error ? (
            <p>Erreur: {error}</p>
          ) : (
            airdrops.map((airdrop) => (
              <CardAirdrop
                key={airdrop.id}
                imgSrc={airdrop.image?.src || "/img/webp/airdrop_project.webp"}
                statu={airdrop.status?.label || "Inconnu"}
                title={airdrop.title}
                text={airdrop.category?.label || "Non classé"}
              />
            ))
          )}
        </div>
      </div>
      <Button variant="primary" size="m">
        Voir plus de projets
      </Button>
    </section>
  );
}
