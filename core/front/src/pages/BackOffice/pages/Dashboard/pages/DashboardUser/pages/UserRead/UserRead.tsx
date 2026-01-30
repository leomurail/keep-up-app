import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/shadcdn/ui/table";
import type { User } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function UserRead() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchUser = async () => {
            try {
                const data = await keepUpClient.user.get(id);
                setUser(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch user");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;

    return (
        <section id="user-read" className="read-table">
            <Table>
                <TableBody>
                    <TableRow className="w-[30%]">
                        <TableCell className="text-center font-bold">ID</TableCell>
                        <TableCell>{user.id}</TableCell>
                    </TableRow>
                    <TableRow className="w-[70%]">
                        <TableCell className="text-center font-bold">Email</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                    <TableRow className="w-[70%]">
                        <TableCell className="text-center font-bold">Roles</TableCell>
                        <TableCell>{user.roles.join(", ")}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    );
}
