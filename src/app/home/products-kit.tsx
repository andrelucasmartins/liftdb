"use client";

import { KITS } from "@/data/kit";
import Image from "next/image";
import Link from "next/link";

interface ProductKitProps {}

export const ProductKit = (props: ProductKitProps) => {
  return (
    <section className="bg-gradient-to-t from-secondary to-lime-500 text-gray-950 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center  mb-4">
          <h1 className="text-3xl font-bold mb-2">
            Faça a escolha do seu kit ideal
          </h1>
          <p className="text-2xl">
            Para melhores resultados indicamos os kits acima de dois potes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto">
          {KITS.map((kit) => (
            <Link href={kit.url} key={kit.id} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={kit.image}
                  alt="kit"
                  className="max-w-full"
                  width={600}
                  height={600}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
