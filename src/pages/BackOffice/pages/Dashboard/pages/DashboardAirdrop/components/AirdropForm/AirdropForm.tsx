import InputField from "@/pages/BackOffice/components/InputField/InputField";
import SelectField from "@/pages/BackOffice/components/SelectField/SelectField";
import TextAreaField from "@/pages/BackOffice/components/TextAreaField/TextAreaField";
import { Button } from "@/components/shadcdn/ui/button";
import FormWrapper from "@/pages/BackOffice/components/FormWrapper/FormWrapper";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import "./AirdropForm.css";
import SocialMediaInputCollection from "../SocialMediaInputCollection/SocialMediaInputCollection";

interface AirdropFormProps {
  form?: UseFormReturn<FieldValues, any, FieldValues>;
}

export default function AirdropForm({ form }: AirdropFormProps) {
  const formValue = form || useForm();

  const categoryOptions = [
    {
      value: "first",
      label: "first",
    },
    {
      value: "second",
      label: "second",
    },
    {
      value: "third",
      label: "third",
    },
    {
      value: "fourth",
      label: "fourth",
    },
  ];

  const statusOptions = [
    {
      value: "waiting",
      label: "En attente",
    },
    {
      value: "in_progress",
      label: "En cours",
    },
    {
      value: "to_claim",
      label: "À récupérer",
    },
    {
      value: "finished",
      label: "Terminé",
    },
  ];

  return (
    <FormWrapper form={formValue} className="airdrop-form">
      <InputField
        form={formValue}
        placeholder="Nom..."
        label="Nom"
        name="name"
      />

      <SelectField
        label="Categorie"
        options={categoryOptions}
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
        placeholder="https://landing.page"
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

      <SocialMediaInputCollection form={formValue} />

      <Button type="submit">Sauvegarder</Button>
    </FormWrapper>
  );
}
