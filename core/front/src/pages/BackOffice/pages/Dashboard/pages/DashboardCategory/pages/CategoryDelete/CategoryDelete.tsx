import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/shadcdn/ui/button";
import { keepUpClient } from "@/pages/BackOffice/instances";

export default function CategoryDelete() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) return;
    try {
      await keepUpClient.category.delete(id);
      navigate("/back-office/dashboard/category/list");
    } catch (e) {
      console.error("Failed to delete category", e);
    }
  };

  return (
    <section id="category-delete" className="flex flex-col gap-4 p-4">
      <h2>Are you sure to want to delete ?</h2>
      <div className="flex gap-2">
        <Button variant="destructive" onClick={handleDelete}>Yes, Delete</Button>
        <Button variant="secondary" onClick={() => navigate("/back-office/dashboard/category/list")}>Cancel</Button>
      </div>
    </section>
  );
}
