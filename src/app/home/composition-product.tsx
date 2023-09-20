"use client";

interface CompositionProductProps {}

export const CompositionProduct = (props: CompositionProductProps) => {
  return (
    <section className="flex flex-col bg-white text-gray-900 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 space-y-6">
        <h1>Conheça alguns compostos do Lift Detox Black</h1>
        <p>
          Diferente de outros produtos disponíveis no mercado, o Lift Detox
          Black é um produto inovador, avaliado como 100% seguro.{" "}
        </p>
      </div>
    </section>
  );
};
