import { keepUpClientApi } from "@/pages/BackOffice/instances";
import { useForm, type FieldValues } from "react-hook-form";
import ApiKeyForm from "../../components/ApiKeyForm/ApiKeyForm";
import TokenPopup from "../../../DashboardUser/pages/UserCreate/components/TokenPopup/TokenPopup";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function ApiKeyCreate() {
    const navigate = useNavigate();

    const [showToken, setShowToken] = useState(false);
    const tokenRef = useRef<string>("");

    const form = useForm<FieldValues>({
        defaultValues: {
            name: "",
        },
    });

    const handleSubmit = async (data: any) => {
        try {
            const { token } = await keepUpClientApi.apiKey.create({
                name: data.name
            });
            tokenRef.current = token;
            setShowToken(true);
        } catch (e) {
            console.error("Failed to create api key", e);
        }
    };

    const handleOpen = (open: boolean) => {
        setShowToken(open);
        navigate("/back-office/dashboard/api-key/list");
    };

    return (
        <section id="api-key-create">
            <ApiKeyForm form={form} onSubmit={handleSubmit} />
            <TokenPopup open={showToken} token={tokenRef.current} onOpenChange={handleOpen} />
        </section>
    );
}
