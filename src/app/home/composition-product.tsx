"use client";

import { COMPOSITION_PRODUCTS } from "@/data/compositionProducts";

interface CompositionProductProps {}

export const CompositionProduct = (props: CompositionProductProps) => {
  return (
    <section className="flex flex-col bg-white text-gray-950 py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl/9 font-semibold text-center">
          Conheça alguns compostos do Lift Detox Black
        </h1>
        <p className="text-center line-clamp-4 text-2xl">
          Diferente de outros produtos disponíveis no mercado, o Lift Detox
          Black é um produto inovador, avaliado como 100% seguro.{" "}
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-3 justify-center items-center  gap-x-4 gap-y-8">
          {COMPOSITION_PRODUCTS.map((composition) => (
            <figure
              key={composition.id}
              className="flex flex-col justify-center items-center text-center space-y-6"
            >
              <img src={composition.image} alt={composition.title} />
              <figcaption className="font-bold text-2xl">
                {composition.title}
              </figcaption>
              <p>{composition.description}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
