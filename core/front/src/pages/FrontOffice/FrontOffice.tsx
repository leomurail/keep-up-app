import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroPart from "./parts/HeroPart/HeroPart";
import AirdropListPart from "./parts/AirdropListPart/AirdropListPart";
import HowItWorksPart from "./parts/HowItWorksPart/HowItWorksPart";
import FeatureToBenefitPart from "./parts/FeatureToBenefitPart/FeatureToBenefitPart";
import KeyStatPart from "./parts/KeyStatPart/KeyStatPart";

import "./FrontOffice.css";

export default function FrontOffice() {
  return (
    <section id="front-office" className="keep-up">
      <Header />
      <HeroPart />
      <AirdropListPart />
      <HowItWorksPart />
      <FeatureToBenefitPart />
      <KeyStatPart />

      <Footer />
    </section>
  );
}
