"use client";

interface AssuranceProps {}

import security_buy from "@/assets/compra-segura.png";
import { default as new_lift_30 } from "@/assets/garantia-lift-black.png";
import new_lift_30_white from "@/assets/Garantia-Lift-Detox-Caps.png";

import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/scrollLink";
import Image from "next/image";

export const Assurance = (props: AssuranceProps) => {
  return (
    <section className="bg-green-950 bg-cover bg-no-repeat">
      <div className=" max-w-6xl  grid grid-cols-1 sm:grid-cols-2 text-white py-10 px-6 mx-auto gap-8">
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold">
            Se você não ver resultados em 30 dias, devolvemos o seu dinheiro!
          </h2>
          <p className="text-lg font-semibold">
            É sério! Você fica satisfeita, ou compramos o Lift Detox Black de
            volta de você! Se por qualquer motivo achar que o Lift Detox Black
            não ajudou, nós nos comprometemos em devolver a quantia paga pelo
            seu kit de potes. Temos certeza que Lift Detox Black vai cumprir com
            o prometido, por isso nosso compromisso é uma garantia incondicional
            de 30 DIAS.
          </p>
          <div className="flex justify-center items-center sm:hidden ">
            <Image
              src={new_lift_30_white}
              alt="Pode 60 cápsulas de Lift Detox Black"
              width={600}
              height={600}
              className="max-w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Button
              className="btn-bg2 btn-lg"
              onClick={() => handleScroll("kits")}
            >
              QUERO MEU LIFT DETOX BLACK
            </Button>
            <Image
              src={security_buy}
              alt="Compra Segura"
              width={400}
              height={400}
              className="max-w-full mx-auto"
            />
          </div>
        </div>
        <div className="sm:flex justify-center items-center hidden ">
          <Image
            src={new_lift_30}
            alt="Pode 60 cápsulas de Lift Detox Black"
            width={400}
            height={400}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
