import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import MultiSelectField from "@/pages/BackOffice/components/MultiSelectField/MultiSelectField";
import { Button } from "@/components/shadcdn/ui/button";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import type { Context } from "react";

interface UserFormProps {
    form?: UseFormReturn<FieldValues, Context<FieldValues>, FieldValues>;
    onSubmit?: (data: FieldValues) => void;
}

const ROLE_OPTIONS = [
    { value: "ROLE_USER", label: "User" },
    { value: "ROLE_SUPER_ADMIN", label: "Super Admin" },
];

export default function UserForm({ form, onSubmit }: UserFormProps) {
    const hookForm = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
            roles: [],
        },
    });
    const formValue = form || hookForm;

    return (
        <FormWrapper form={formValue} className="dashboard-form" onSubmit={onSubmit}>
            <InputField
                form={formValue}
                placeholder="Email..."
                label="Email"
                name="email"
                type="email"
            />
            <InputField
                form={formValue}
                placeholder="Password..."
                label="Password"
                name="password"
                type="password"
            />
            <MultiSelectField
                form={formValue}
                label="Roles"
                name="roles"
                options={ROLE_OPTIONS}
                placeholder="Sélectionnez les rôles..."
            />
            <Button type="submit">Sauvegarder</Button>
        </FormWrapper>
    );
}
