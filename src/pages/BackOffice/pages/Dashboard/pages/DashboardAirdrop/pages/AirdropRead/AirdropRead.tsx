import {
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/shadcdn/ui/table";

import "./AirdropRead.css";
import { Button } from "@/components/shadcdn/ui/button";
import { Link } from "react-router";

export default function AirdropRead() {
  return (
    <section id="airdrop-read">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-center w-[30%]">Titre</TableCell>
            <TableCell className="w-[70%]">Airdrop title</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Category</TableCell>
            <TableCell className="w-[70%]">Category</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Image</TableCell>
            <TableCell className="w-[70%]">
              <img
                src="https://placehold.co/120x120"
                width={120}
                height={120}
                alt="Airdrop logo"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Statut</TableCell>
            <TableCell className="w-[70%]">Status name</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Lien</TableCell>
            <TableCell className="w-[70%]">
              <Button>
                <Link to="https://leomurail.com">Claim</Link>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">Text</TableCell>
            <TableCell className="w-[70%]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                semper convallis lorem eget mattis. Vivamus at porttitor dui.
                Nullam luctus augue purus, sit amet fermentum nulla molestie a.
                Nam tristique metus sit amet lorem faucibus, in tempor nunc
                rhoncus. Etiam quis hendrerit felis. Donec ut nibh arcu. Cras ut
                elementum mauris, eget malesuada dolor.
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center w-[30%]">
              Réseaux sociaux
            </TableCell>
            <TableCell className="w-[70%]">
              <div className="social-medias">
                <div>
                  <img
                    src="https://placehold.co/25x25"
                    width={25}
                    height={25}
                    alt="social media"
                  />
                  <span className="social-name">Insta</span>
                </div>

                <div>
                  <img
                    src="https://placehold.co/25x25"
                    width={25}
                    height={25}
                    alt="social media"
                  />
                  <span className="social-name">Twitter</span>
                </div>

                <div>
                  <img
                    src="https://placehold.co/25x25"
                    width={25}
                    height={25}
                    alt="social media"
                  />
                  <span className="social-name">app</span>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
