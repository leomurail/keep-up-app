import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import type { User } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await keepUpClient.user.list();
                setUsers(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch users");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="user-list">
            {users.map((user) => (
                <DashboardCard
                    key={user.id}
                    id={user.id}
                    label={user.email}
                    name="user"
                />
            ))}
        </section>
    );
}
