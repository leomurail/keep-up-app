import { useNavigate, useParams } from "react-router";
import { client } from "@/instance";
import { Button } from "@/components/shadcdn/ui/button";

export default function CategoryDelete() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) return;
    try {
      await client.categories.delete(id);
      navigate("/back-office/dashboard/category/list");
    } catch (e) {
      console.error("Failed to delete category", e);
    }
  };

  return (
    <section id="category-delete" className="flex flex-col gap-4 p-4">
      <h1>Are you sure you want to delete this category?</h1>
      <div className="flex gap-2">
        <Button variant="destructive" onClick={handleDelete}>Yes, Delete</Button>
        <Button variant="secondary" onClick={() => navigate("/back-office/dashboard/category/list")}>Cancel</Button>
      </div>
    </section>
  );
}
