import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import UserForm from "../../components/UserForm/UserForm";
import { client } from "@/instance";

export default function UserUpdate() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const form = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
            roles: []
        },
    });

    useEffect(() => {
        if (!id) return;
        const fetchUser = async () => {
            try {
                const data = await client.users.get(id);
                form.reset({
                    email: data.email,
                    roles: data.roles,
                });
            } catch (e) {
                console.error("Failed to fetch user", e);
            }
        };
        fetchUser();
    }, [id, form]);

    const handleSubmit = async (data: any) => {
        if (!id) return;
        try {
            await client.users.update(id, {
                email: data.email,
                roles: data.roles
            });
            navigate("/back-office/dashboard/users/list");
        } catch (e) {
            console.error("Failed to update user", e);
        }
    };

    return (
        <section id="user-update">
            <UserForm form={form} onSubmit={handleSubmit} />
        </section>
    );
}
