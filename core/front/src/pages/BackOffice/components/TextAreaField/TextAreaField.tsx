import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/shadcdn/ui/form";
import { Textarea } from "@/components/shadcdn/ui/textarea";
import type { FieldValues, UseFormReturn, Path } from "react-hook-form";

interface FormFieldProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  placeholder?: string;
  label?: string;
  name: Path<TFieldValues>;
}

export default function TextAreaField<TFieldValues extends FieldValues>({
  placeholder = "",
  label = "",
  form,
  name,
}: FormFieldProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
