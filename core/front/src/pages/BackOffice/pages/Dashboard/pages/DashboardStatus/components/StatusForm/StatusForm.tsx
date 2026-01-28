import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import { Button } from "@/components/shadcdn/ui/button";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import type { Context } from "react";

interface StatusFormProps {
    form?: UseFormReturn<FieldValues, Context<FieldValues>, FieldValues>;
    onSubmit?: (data: FieldValues) => void;
}

export default function StatusForm({ form, onSubmit }: StatusFormProps) {
    const hookForm = useForm<FieldValues>({
        defaultValues: {
            label: "",
            slug: "",
        },
    });
    const formValue = form || hookForm;

    return (
        <FormWrapper form={formValue} className="dashboard-form" onSubmit={onSubmit}>
            <InputField
                form={formValue}
                placeholder="Label..."
                label="Label"
                name="label"
            />
            <InputField
                form={formValue}
                placeholder="status-slug..."
                label="Slug"
                name="slug"
            />
            <Button type="submit">Sauvegarder</Button>
        </FormWrapper>
    );
}
