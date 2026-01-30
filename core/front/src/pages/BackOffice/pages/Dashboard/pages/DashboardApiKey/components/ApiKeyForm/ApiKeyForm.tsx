import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import { Button } from "@/components/shadcdn/ui/button";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import type { Context } from "react";

interface ApiKeyFormProps {
    form?: UseFormReturn<FieldValues, Context<FieldValues>, FieldValues>;
    onSubmit?: (data: FieldValues) => void;
}

export default function ApiKeyForm({ form, onSubmit }: ApiKeyFormProps) {
    const hookForm = useForm<FieldValues>({
        defaultValues: {
            name: "",
        },
    });
    const formValue = form || hookForm;

    return (
        <FormWrapper form={formValue} className="dashboard-form" onSubmit={onSubmit}>
            <InputField
                form={formValue}
                placeholder="Name..."
                label="Name"
                name="name"
                type="text"
            />
            <Button type="submit">Sauvegarder</Button>
        </FormWrapper>
    );
}
