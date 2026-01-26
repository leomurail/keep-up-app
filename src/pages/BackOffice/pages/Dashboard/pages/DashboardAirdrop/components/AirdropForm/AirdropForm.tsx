import { useEffect, useState } from "react";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import SelectField from "@/pages/BackOffice/components/SelectField/SelectField";
import TextAreaField from "@/pages/BackOffice/components/TextAreaField/TextAreaField";
import { Button } from "@/components/shadcdn/ui/button";
import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import SocialMediaInputCollection from "../SocialMediaInputCollection/SocialMediaInputCollection";
import type { Context } from "react";
import { client } from "@/instance";

interface AirdropFormProps {
  form?: UseFormReturn<FieldValues, Context<FieldValues>, FieldValues>;
  onSubmit?: (data: FieldValues) => void;
}

export default function AirdropForm({ form, onSubmit }: AirdropFormProps) {
  const hookForm = useForm<FieldValues>({
    defaultValues: {
      name: "",
      category: "",
      status: "",
      link: "",
      description: "",
      socialMedia: [],
    },
  });
  const formValue = form || hookForm;

  const [categories, setCategories] = useState<{ value: string, label: string }[]>([]);
  const [statusOptions, setStatusOptions] = useState<{ value: string, label: string }[]>([]);
  const [socialOptions, setSocialOptions] = useState<{ value: string, label: string }[]>([]);

  useEffect(() => {
    client.categories.list().then(cats => {
      setCategories(cats.map(c => ({
        value: c.id.toString(),
        label: c.label
      })));
    }).catch(console.error);

    client.status.list().then(statuses => {
      setStatusOptions(statuses.map(s => ({
        value: s.id.toString(),
        label: s.label
      })));
    }).catch(console.error);

    client.socialMedia.list().then(medias => {
      setSocialOptions(medias.map(m => ({
        value: m.id.toString(),
        label: m.label
      })));
    }).catch(console.error);
  }, []);

  return (
    <FormWrapper form={formValue} className="dashboard-form" onSubmit={onSubmit}>
      <InputField
        form={formValue}
        placeholder="Nom..."
        label="Nom"
        name="name"
      />

      <SelectField
        label="Categorie"
        options={categories}
        name="category"
        placeholder="Pas de categorie"
        form={formValue}
      />

      <InputField form={formValue} label="Image" name="image" type="file" />

      <SelectField
        label="Statut"
        options={statusOptions}
        name="status"
        placeholder="Pas de statut"
        form={formValue}
      />

      <InputField
        form={formValue}
        placeholder="https://app.page"
        label="Lien"
        name="link"
        type="url"
      />

      <TextAreaField
        form={formValue}
        name="description"
        label="Description"
        placeholder="Description..."
      />

      <SocialMediaInputCollection form={formValue} options={socialOptions} />

      <Button type="submit">Sauvegarder</Button>
    </FormWrapper>
  );
}
