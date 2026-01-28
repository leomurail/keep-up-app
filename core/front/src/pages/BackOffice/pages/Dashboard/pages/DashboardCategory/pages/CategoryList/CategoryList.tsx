import { useEffect, useState } from "react";
import DashboardCard from "../../../../components/DashboardCard/DashboardCard";
import { client } from "@/instance";
import type { Category } from "@/clients/KeepUpClient/Ressources/types";

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.categories.list();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section id="category-list">
      {categories.map((category) => (
        <DashboardCard
          key={category.id}
          id={category.id}
          title={category.label}
          name="category"
        />
      ))}
    </section>
  );
}
