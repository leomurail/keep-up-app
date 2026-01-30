import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import type { ApiKey } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function ApiKeyList() {
    const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchApiKeys = async () => {
            try {
                const data = await keepUpClient.apiKey.list();
                setApiKeys(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch apiKeys");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApiKeys();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="api-key-list">
            {apiKeys.map((apiKey) => (
                <DashboardCard
                    key={apiKey.id}
                    id={apiKey.id}
                    label={apiKey.name}
                    name="api-key"
                    disabledActions={['update', 'read']}
                />
            ))}
        </section>
    );
}
