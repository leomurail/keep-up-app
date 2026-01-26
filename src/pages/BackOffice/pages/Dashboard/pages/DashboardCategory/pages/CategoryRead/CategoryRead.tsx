import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/shadcdn/ui/table";

import "./CategoryRead.css";

export default function CategoryRead() {
  return (
    <section id="category-read">
      <Table>
        <TableBody>
          <TableRow className="w-[30%]">
            <TableCell className="text-center font-bold">Nom</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
          <TableRow className="w-[70%]">
            <TableCell className="text-center font-bold">Slug</TableCell>
            <TableCell>category</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
