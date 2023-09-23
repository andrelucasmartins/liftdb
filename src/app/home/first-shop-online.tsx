import { FaCcMastercard, FaLock, FaTruck, FaUserShield } from "react-icons/fa6";

interface FirstShopOnlineProps {}

export const FirstShopOnline = (props: FirstShopOnlineProps) => {
  return (
    <section className="bg-[#1d6a24] px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            É a sua primeira compra pela internet?
          </h1>
          <p className="text-2xl">
            Não se preocupe, site 100% seguro, empresa confiável e entrega
            garantida!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center md:text-2xl">
          <div className="flex flex-col justify-center items-center  space-y-2">
            <FaTruck className="text-[#03ff00]" size={70} />
            <h2 className="">Entrega garantida no prazo </h2>
          </div>
          <div className="flex flex-col justify-center items-center  space-y-2">
            <FaUserShield className="text-[#03ff00]" size={70} />
            <h2>Dados pessoais não são compartilhados </h2>
          </div>
          <div className="flex flex-col justify-center items-center  space-y-2">
            <FaCcMastercard className="text-[#03ff00]" size={70} />
            <h2>Dados financeiros criptografados</h2>
          </div>
          <div className="flex flex-col justify-center items-center  space-y-2">
            <FaLock className="text-[#03ff00]" size={70} />
            <h2>Site 100% confiável e seguro</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
