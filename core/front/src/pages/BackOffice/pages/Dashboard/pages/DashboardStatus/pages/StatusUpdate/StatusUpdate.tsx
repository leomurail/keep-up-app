import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import StatusForm from "../../components/StatusForm/StatusForm";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function StatusUpdate() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const form = useForm<FieldValues>({
        defaultValues: {
            label: "",
            slug: "",
        }
    });

    useEffect(() => {
        if (!id) return;

        keepUpClient.status.get(id).then((status) => {
            form.reset({
                label: status.label,
                slug: status.slug,
            });
            setLoading(false);
        }).catch(console.error);
    }, [id, form]);

    const handleSubmit = async (data: FieldValues) => {
        if (!id) return;
        try {
            await keepUpClient.status.update(id, {
                label: data.label,
                slug: data.slug,
            });
            navigate("/back-office/dashboard/status/list");
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="status-update">
            <h1 className="text-2xl font-bold mb-4">Modifier un statut</h1>
            <StatusForm form={form} onSubmit={handleSubmit} />
        </div>
    );
}
