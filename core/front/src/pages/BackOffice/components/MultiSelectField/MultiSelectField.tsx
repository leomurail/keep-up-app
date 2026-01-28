import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcdn/ui/form";

import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/shadcdn/ui/combobox";

import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type SelectOption = {
    value: string;
    label: string;
};

interface MultiSelectFieldProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>;
    label?: string;
    placeholder?: string;
    form: UseFormReturn<TFieldValues>;
    options: SelectOption[];
    className?: string;
}

export default function MultiSelectField<TFieldValues extends FieldValues>({
    name,
    label = "",
    placeholder = "Sélectionnez...",
    form,
    options,
    className = "w-full",
}: MultiSelectFieldProps<TFieldValues>) {
    const anchor = useComboboxAnchor();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                const selectedValues: string[] = Array.isArray(field.value) ? field.value : [];

                // Mapper les valeurs sélectionnées vers les options complètes
                const selectedOptions = selectedValues
                    .map((value) => options.find((opt) => opt.value === value))
                    .filter(Boolean) as SelectOption[];

                return (
                    <FormItem className={className}>
                        {label && <FormLabel>{label}</FormLabel>}
                        <Combobox
                            items={options}
                            multiple
                            value={selectedOptions}
                            onValueChange={(newOptions: SelectOption[]) => {
                                // Convertir les options en valeurs pour react-hook-form
                                const newValues = newOptions.map((opt) => opt.value);
                                field.onChange(newValues);
                            }}
                            itemToStringValue={(option) => option.label}
                        >
                            <ComboboxChips ref={anchor}>
                                <ComboboxValue>
                                    {selectedOptions.map((option) => (
                                        <ComboboxChip key={option.value}>
                                            {option.label}
                                        </ComboboxChip>
                                    ))}
                                </ComboboxValue>
                                <ComboboxChipsInput placeholder={placeholder} />
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>Aucun résultat trouvé.</ComboboxEmpty>
                                <ComboboxList>
                                    {(option) => (
                                        <ComboboxItem key={option.value} value={option}>
                                            {option.label}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                        <FormMessage />
                    </FormItem>
                );
            }}
        />
    );
}
