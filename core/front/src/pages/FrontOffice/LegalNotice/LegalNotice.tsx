import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./LegalNotice.css";

export default function LegalNotice() {
    return (
        <div className="keep-up">
            <Header />
            <main className="container legal-notice-page">
                <h1>Mentions Légales</h1>
                <div className="content">
                    <section>
                        <h2>1. Éditeur du site</h2>
                        <p>
                            Le site Keep Up est édité par [Nom de l'entreprise], [Forme juridique] au capital de [Montant] euros, immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [Numéro SIREN].
                        </p>
                        <p>
                            Siège social : [Adresse complète]
                            <br />
                            Directeur de la publication : [Nom du directeur]
                            <br />
                            Contact : [Adresse email]
                        </p>
                    </section>
                    <section>
                        <h2>2. Hébergement</h2>
                        <p>
                            Le site est hébergé par [Nom de l'hébergeur], dont le siège social est situé [Adresse de l'hébergeur].
                        </p>
                    </section>
                    <section>
                        <h2>3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
