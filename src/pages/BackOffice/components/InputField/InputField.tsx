import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/shadcdn/ui/form";
import { Input } from "@/components/shadcdn/ui/input";
import type { FieldValues, UseFormReturn, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  placeholder?: string;
  label?: string;
  name: Path<T>;
  type?: React.HTMLInputTypeAttribute;
}

export default function InputField<T extends FieldValues>({
  placeholder = "",
  label = "",
  form,
  name,
  type = "text",
}: FormFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const isFile = type === "file";

        const fileProps = isFile ?
          {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(e.target.files);
            }
          } : {};

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                value={isFile ? undefined : field.value}
                {...fileProps}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
