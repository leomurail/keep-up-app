import "./FeatureToBenefitPart.css";
import CardFeature from "../../components/CardFeature/CardFeature";

export default function FeatureToBenefitPart() {
  return (
    <section id="feature-to-benefit-part">
      <h2>Ne loupez plus d’opportunités</h2>
      <div className="feature-to-benefit-step">
        <CardFeature
          title="Nous vous informons"
          text={
            <>
              Sur les airdrops
              <br />
              les plus prometteurs
            </>
          }
          imgSrc="img/svg/info.svg"
          textButton="Rester informé"
        />
        <CardFeature
          title="Nous vous alertons"
          text={
            <>
              Au bon moment pour
              <br />
              claim l'airdrop
            </>
          }
          imgSrc="img/svg/notifications.svg"
          textButton="Rester alerté"
        />
        <CardFeature
          title="Nous vous guidons"
          text={
            <>
              Dans vos démarches pour
              <br />
              ne plus vous perdre
            </>
          }
          imgSrc="/img/svg/compass.svg"
          textButton="Être guidé"
        />
      </div>
    </section>
  );
}
