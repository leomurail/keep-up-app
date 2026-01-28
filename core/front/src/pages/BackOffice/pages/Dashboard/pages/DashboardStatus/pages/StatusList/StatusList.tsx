import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import { client } from "@/instance";
import type { Status } from "@/clients/KeepUpClient/Ressources/types";

export default function StatusList() {
    const [statuses, setStatuses] = useState<Status[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const data = await client.status.list();
                setStatuses(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch statuses");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStatuses();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="status-list">
            {statuses.map((status) => (
                <DashboardCard
                    key={status.id}
                    id={status.id}
                    title={status.label}
                    name="status"
                />
            ))}
        </section>
    );
}
