import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/shadcdn/ui/table";
import { keepUpClient } from "@/pages/BackOffice/instances";
import type { ApiKey } from "@/clients/KeepUpClient/Ressources/types";

export default function ApiKeyRead() {
    const { id } = useParams<{ id: string }>();
    const [apiKey, setApiKey] = useState<ApiKey | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchApiKey = async () => {
            try {
                const data = await keepUpClient.apiKey.get(id);
                setApiKey(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch apiKey");
            } finally {
                setLoading(false);
            }
        };
        fetchApiKey();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!apiKey) return <div>Api Key not found</div>;

    return (
        <section id="apiKey-read" className="read-table">
            <Table>
                <TableBody>
                    <TableRow className="w-[30%]">
                        <TableCell className="text-center font-bold">Name</TableCell>
                        <TableCell>{apiKey.name}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    );
}
