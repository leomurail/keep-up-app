import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/shadcdn/ui/table";
import { client } from "@/instance";
import type { Category } from "@/clients/KeepUpClient/Ressources/types";

import "./CategoryRead.css";

export default function CategoryRead() {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const data = await client.categories.get(id);
        setCategory(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch category");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!category) return <div>Category not found</div>;

  return (
    <section id="category-read">
      <Table>
        <TableBody>
          <TableRow className="w-[30%]">
            <TableCell className="text-center font-bold">Nom</TableCell>
            <TableCell>{category.label}</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center font-bold">Slug</TableCell>
            <TableCell>{category.slug}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
