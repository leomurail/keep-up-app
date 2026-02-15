import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
        <div className="keep-up">
            <Header />
            <main className="container privacy-policy-page">
                <h1>Politique de Confidentialité</h1>
                <div className="content">
                    <p>Dernière mise à jour : [Date]</p>
                    <section>
                        <h2>1. Collecte des informations</h2>
                        <p>
                            Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et / ou carte de crédit.
                        </p>
                    </section>
                    <section>
                        <h2>2. Utilisation des informations</h2>
                        <p>
                            Toute les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                        </p>
                        <ul>
                            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                            <li>Fournir un contenu publicitaire personnalisé</li>
                            <li>Améliorer notre site Web</li>
                            <li>Améliorer le service client et vos besoins de prise en charge</li>
                            <li>Vous contacter par e-mail</li>
                            <li>Administrer un concours, une promotion, ou une enquête</li>
                        </ul>
                    </section>
                    {/* Add more sections as needed */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
