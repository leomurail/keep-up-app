import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import { Button } from "@/components/shadcdn/ui/button";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import type { Context } from "react";

import "./CategoryForm.css";

interface CategoryFormProps {
  form?: UseFormReturn<FieldValues, Context<FieldValues>, FieldValues>;
  onSubmit?: (data: FieldValues) => void;
}

export default function CategoryForm({ form, onSubmit }: CategoryFormProps) {
  const hookForm = useForm<FieldValues>({
    defaultValues: {
      name: "",
      slug: "",
    },
  });
  const formValue = form || hookForm;

  return (
    <FormWrapper form={formValue} className="category-form" onSubmit={onSubmit}>
      <InputField
        form={formValue}
        placeholder="Nom..."
        label="Nom"
        name="name"
      />
      <InputField
        form={formValue}
        placeholder="slug-name..."
        label="Slug"
        name="slug"
      />
      <Button type="submit">Sauvegarder</Button>
    </FormWrapper>
  );
}
