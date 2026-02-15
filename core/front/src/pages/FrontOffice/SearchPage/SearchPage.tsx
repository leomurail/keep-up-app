import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import CardAirdrop from "../components/CardAirdrop/CardAirdrop";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { keepUpClientBff } from "../instances";
import { getConfig } from "@/utils";
import type { AirdropEvent } from "@/clients/KeepUpClient/Ressources/types";
import "./SearchPage.css";

const ITEMS_PER_PAGE = 9;

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const [airdrops, setAirdrops] = useState<AirdropEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchAirdrops = async () => {
            setLoading(true);
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

    // Filter airdrops based on query
    const filteredAirdrops = airdrops.filter((airdrop) => {
        if (!query) return true;
        const lowerQuery = query.toLowerCase();
        return (
            airdrop.title?.toLowerCase().includes(lowerQuery) ||
            airdrop.category?.label?.toLowerCase().includes(lowerQuery)
        );
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredAirdrops.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentAirdrops = filteredAirdrops.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo(0, 0);
        }
    };

    const handleSearch = (newQuery: string) => {
        setSearchParams({ q: newQuery });
        setCurrentPage(1); // Reset to first page on new search
    };

    return (
        <div className="keep-up">
            <Header />
            <main className="search-page container">
                <div className="search-header">
                    <h1>Recherche d'Airdrops</h1>
                    <SearchBar
                        placeholder="Rechercher un airdrop..."
                        initialValue={query}
                        onSearch={handleSearch}
                    />
                </div>

                <div className="search-results-count">
                    {filteredAirdrops.length} résultat{filteredAirdrops.length > 1 ? "s" : ""} trouvé{filteredAirdrops.length > 1 ? "s" : ""}
                </div>

                <div className="search-grid">
                    {loading ? (
                        <p>Chargement...</p>
                    ) : error ? (
                        <p>Erreur: {error}</p>
                    ) : currentAirdrops.length > 0 ? (
                        currentAirdrops.map((airdrop) => (
                            <CardAirdrop
                                key={airdrop.id}
                                imgSrc={getConfig("VITE_API_URL") + "/api/image/content/" + airdrop.image?.src || "/img/webp/airdrop_project.webp"}
                                statu={airdrop.status?.label || "Inconnu"}
                                title={airdrop.title}
                                text={airdrop.category?.label || "Non classé"}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <p>Aucun airdrop ne correspond à votre recherche.</p>
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="pagination-btn"
                        >
                            Précédent
                        </button>
                        <span className="pagination-info">
                            Page {currentPage} sur {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="pagination-btn"
                        >
                            Suivant
                        </button>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
