import { useNavigate } from "react-router";
import StatusForm from "../../components/StatusForm/StatusForm";
import type { FieldValues } from "react-hook-form";
import { client } from "@/instance";

export default function StatusCreate() {
    const navigate = useNavigate();

    const handleSubmit = async (data: FieldValues) => {
        try {
            await client.status.create({
                label: data.label,
                slug: data.slug,
            });
            navigate("/back-office/dashboard/status/list");
        } catch (error) {
            console.error("Failed to create status", error);
        }
    };

    return (
        <div className="status-create">
            <StatusForm onSubmit={handleSubmit} />
        </div>
    );
}
