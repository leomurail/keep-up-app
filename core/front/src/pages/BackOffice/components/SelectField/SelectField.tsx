import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcdn/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcdn/ui/select";

import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type SelectOption = {
  value: string;
  label: string;
};
// ---------------------------------------------------------------------------------------------

interface SelectFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label?: string;
  placeholder?: string;
  form: UseFormReturn<TFieldValues>;
  options: SelectOption[];
  className?: string;
}

export default function SelectField<TFieldValues extends FieldValues>({
  name,
  label = "",
  placeholder = "Select an option...",
  form,
  options,
  className = "w-[180px]",
}: SelectFieldProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className={className} onBlur={field.onBlur}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
