import AirdropForm from "../../components/AirdropForm/AirdropForm";
import { useForm, type FieldValues } from "react-hook-form";

export default function AirdropUpdate() {
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "Jhon Doe",
      category: "first",
      status: "waiting",
      link: "https://app-page.com",
      description: "Lorem ipsum dolor sit amet",
    },
  });

  return (
    <section id="airdrop-create">
      <AirdropForm form={form} />
    </section>
  );
}
