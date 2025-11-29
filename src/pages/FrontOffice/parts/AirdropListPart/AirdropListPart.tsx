import "./AirdropListPart.css";
import Button from "../../components/Button/Button";
import CardAirdrop from "../../components/CardAirdrop/CardAirdrop";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function AirdropListPart() {
  return (
    <section id="airdrop-list-part">
      <div id="airdrop-search-part">
        <h2>Les Airdrops les plus prometteurs </h2>
        <SearchBar placeholder="Rechercher un airdrop..." />
      </div>
      <div id="aidrop-liste-content">
        <h3>Notre Sélection</h3>
        <div id="airdrops-cards-content">
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
          <CardAirdrop
            imgSrc="/img/webp/airdrop_project.webp"
            statu="En cours"
            title="Blast"
            text="BlockChain"
          />
        </div>
      </div>
      <Button variant="primary" size="m">
        Voir plus de projets
      </Button>
    </section>
  );
}
