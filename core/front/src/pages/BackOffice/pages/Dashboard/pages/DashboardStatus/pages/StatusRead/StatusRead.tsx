import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/shadcdn/ui/table";
import type { Status } from "@/clients/KeepUpClient/Ressources/types";
import { keepUpClientApi } from "@/pages/BackOffice/instances";

export default function StatusRead() {
    const { id } = useParams<{ id: string }>();
    const [status, setStatus] = useState<Status | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        keepUpClientApi.status.get(id).then((data) => {
            setStatus(data);
        }).catch(console.error).finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!status) return <div>Status not found</div>;

    return (
        <section id="status-read" className="read-table">
            <Table>
                <TableBody>
                    <TableRow className="w-[30%]">
                        <TableCell className="text-center font-bold">Label</TableCell>
                        <TableCell>{status.label}</TableCell>
                    </TableRow>
                    <TableRow className="w-[70%]">
                        <TableCell className="text-center font-bold">Slug</TableCell>
                        <TableCell>{status.slug}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    );
}
