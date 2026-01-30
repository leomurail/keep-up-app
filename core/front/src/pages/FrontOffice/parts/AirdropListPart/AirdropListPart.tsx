import { useEffect, useState } from "react";
import "./AirdropListPart.css";
import Button from "../../components/Button/Button";
import CardAirdrop from "../../components/CardAirdrop/CardAirdrop";
import SearchBar from "../../components/SearchBar/SearchBar";
import type { AirdropEvent } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClientBff } from "../../instances";
import { getConfig } from "@/utils";

export default function AirdropListPart() {
  const [airdrops, setAirdrops] = useState<AirdropEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const data = await keepUpClientBff.airdropEvent.list();
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
            airdrops ? airdrops.map((airdrop) => (
              <CardAirdrop
                key={airdrop.id}
                imgSrc={getConfig("VITE_API_URL") + "/api/image/content/" + airdrop.image?.src || "/img/webp/airdrop_project.webp"}
                statu={airdrop.status?.label || "Inconnu"}
                title={airdrop.title}
                text={airdrop.category?.label || "Non classé"}
              />
            )) : (
              <p>Aucun airdrop trouvé</p>
            )
          )}
        </div>
      </div>
      <Button variant="primary" size="m">
        Voir plus de projets
      </Button>
    </section>
  );
}
