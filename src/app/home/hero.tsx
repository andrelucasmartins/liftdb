"use client";

import logo from "@/assets/logotipo-lift-detox-black-1-150x150.png";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {}

export const Hero = (props: HeroProps) => {
  return (
    <>
      <section className="bg-lift-mobile sm:bg-lift bg-cover bg-no-repeat">
        <div className=" max-w-6xl  grid grid-cols-1 sm:grid-cols-2 text-white py-10 px-6 mx-auto">
          <div className="flex flex-col space-y-6">
            <div>
              <Image
                src={logo}
                alt="Logotipo Lift Detox Black"
                width={96}
                height={96}
              />
            </div>
            <h2 className="text-3xl/8">
              Suplemento alimentar{" "}
              <b className="text-secondary">
                rico em vitaminas e com produtos naturais
              </b>{" "}
              que auxilia no seu emagrecimento
            </h2>
            <p className="text-lg/6 line-clamp-5">
              LIFT DETOX BLACK reúne os principais produtos naturais e vitaminas
              que seu organismo precisa para eliminar gorduras localizadas.
            </p>
            <div className="flex flex-col space-y-2">
              <Button className="bg-gradient-to-r from-secondary to-lime-500 text-primary py-6">
                QUERO MEU LIFT DETOX BLACK
              </Button>
              <Image
                src="/compra-segura.png"
                alt="Compra Segura"
                width={450}
                height={450}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/lift-pagina-nova.webp"
              alt="Pode 60 cápsulas de Lift Detox Black"
              width={524}
              height={493}
              className="max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
