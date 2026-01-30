import { useNavigate } from "react-router";
import UserForm from "../../components/UserForm/UserForm";
import { useForm, type FieldValues } from "react-hook-form";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function UserCreate() {
    const form = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
            roles: ["ROLE_USER"],
        },
    });
    const navigate = useNavigate();

    const handleSubmit = async (data: any) => {
        try {
            await keepUpClient.user.create({
                email: data.email,
                password: data.password,
                roles: Array.isArray(data.roles) ? data.roles : [data.roles],
            });
            navigate("/back-office/dashboard/user/list");
        } catch (e) {
            console.error("Failed to create user", e);
        }
    };

    return (
        <section id="user-create">
            <UserForm form={form} onSubmit={handleSubmit} />
        </section>
    );
}
