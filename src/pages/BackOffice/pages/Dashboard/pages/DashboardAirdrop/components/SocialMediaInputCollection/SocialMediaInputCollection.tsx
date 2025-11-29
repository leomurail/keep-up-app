import { Button } from "@/components/shadcdn/ui/button";
import InputField from "@/pages/BackOffice/components/InputField/InputField";
import SelectField from "@/pages/BackOffice/components/SelectField/SelectField";
import {
  useFieldArray,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

import "./SocialMediaInputCollection.css";
import { Trash } from "lucide-react";

interface SocialsFormProps {
  form: UseFormReturn<FieldValues, any, FieldValues>;
}

const socialOptions = [
  { value: "twitter", label: "Twitter" },
  { value: "discord", label: "Discord" },
  { value: "telegram", label: "Telegram" },
  { value: "website", label: "Website" },
];

export default function SocialMediaInputCollection({ form }: SocialsFormProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "social_media",
  });

  return (
    <div className="social-media-input-collection">
      <div className="top">
        <h3 className="title">Réseaux Sociaux</h3>
        <Button
          type="button"
          variant="outline"
          className="add-social-media"
          onClick={() => append({ type: "", link: "" })}
        >
          Ajouter
        </Button>
      </div>
      {fields.map((item, index) => (
        <div key={item.id} className="flex items-end gap-2">
          <SelectField
            form={form}
            name={`socials.${index}.type`}
            label="Type"
            options={socialOptions}
            placeholder="Choisir un réseau"
          />
          <InputField
            form={form}
            name={`socials.${index}.link`}
            label="Lien"
            placeholder="https://..."
            type="url"
          />
          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            <Trash />
          </Button>
        </div>
      ))}
    </div>
  );
}
