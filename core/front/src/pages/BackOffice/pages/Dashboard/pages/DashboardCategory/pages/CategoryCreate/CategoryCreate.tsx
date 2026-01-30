import { useNavigate } from "react-router";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function CategoryCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      await keepUpClient.category.create({
        label: data.name,
        slug: data.slug,
      });
      navigate("/back-office/dashboard/category/list");
    } catch (e) {
      console.error("Failed to create category", e);
      // TODO: Handle error
    }
  };

  return (
    <section id="category-create">
      <CategoryForm onSubmit={handleSubmit} />
    </section>
  );
}
