"use client";

interface ManufacturingProps {}

export const Manufacturing = (props: ManufacturingProps) => {
  return (
    <section className="bg-green-950  text-white py-12 px-6 ">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold mb-2">
          Veja como o Lift Detox Black é fabricado
        </h1>
        <p className="text-xl">
          Seguimos todas as normas e diretrizes de fabricação para levar o
          melhor produto até você.
        </p>

        <iframe
          width="100%"
          // height="315"
          src="https://www.youtube.com/embed/28mwHkbaE9Q?si=W_1PxXMM8r2195FI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="flex justify-center mt-4 h-96 mx-auto sm:max-w-2xl  border-2 border-secondary rounded-md"
        ></iframe>
      </div>
    </section>
  );
};
