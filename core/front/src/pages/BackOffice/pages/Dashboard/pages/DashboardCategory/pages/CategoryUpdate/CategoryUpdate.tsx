import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function CategoryUpdate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  useEffect(() => {
    if (!id) return;
    const fetchCategory = async () => {
      try {
        const category = await keepUpClient.category.get(id);
        form.reset({
          name: category.label,
          slug: category.slug,
        });
      } catch (e) {
        console.error("Failed to fetch category", e);
      }
    };
    fetchCategory();
  }, [id, form]);

  const handleSubmit = async (data: FieldValues) => {
    if (!id) return;
    try {
      await keepUpClient.category.update(id, {
        label: data.name,
        slug: data.slug,
      });
      navigate("/back-office/dashboard/category/list");
    } catch (e) {
      console.error("Failed to update category", e);
    }
  };

  return (
    <section id="category-update">
      <CategoryForm form={form} onSubmit={handleSubmit} />
    </section>
  );
}
