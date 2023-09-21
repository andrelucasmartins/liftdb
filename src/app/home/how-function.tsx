interface HowFunctionProps {}

export const HowFunction = (props: HowFunctionProps) => {
  return (
    <section
      className="bg-[#1d6a24] bg-[url(/capsulas.png)] bg-no-repeat bg-contain text-white py-16 px-6 border-y-4 
    border-secondary"
    >
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold mb-10">
          Como funciona o{" "}
          <span className="text-secondary">Lift Detox Black:</span>
        </h1>
        <p className="text-xl">
          Lift Detox Black é um suplemento 100% NATURAL, que vai te ajudar a
          ficar mais leve de forma segura e eficaz.
        </p>
        <p className="text-xl">
          Ele possui em sua composição, vitaminas, minerais, fibras, aminoácidos
          e fitonutrientes essenciais que estimulam o metabolismo, promovendo a
          queima de gordura e melhora a saúde como um todo, pois, regula o
          trânsito intestinal, ajuda a controlar aquela vontade de comer doces,
          carboidratos e ainda pela quitosana auxilia na manutenção dos níveis
          de colesterol sanguíneo.
        </p>
      </div>
    </section>
  );
};
