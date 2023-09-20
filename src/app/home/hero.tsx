'use client'

import { Button } from "@/components/ui/button";

interface HeroProps {
}

export const Hero = (props: HeroProps) => {
 return (
   <>
     <section className="bg-[url(/Lift-Mobile-scaled.jpg)] sm:bg-[url(/BG-Lift-Novo.jpg)] bg-cover bg-no-repeat">
       <div className=" max-w-6xl  grid grid-cols-1 sm:grid-cols-2 text-white py-10 px-6 mx-auto">
         <div className="flex flex-col space-y-6">
           <div>
             <img
               src="/Logotipo-Lift-Detox-Black-1-150x150.png"
               alt="Logotipo Lift Detox Black"
               className="w-28 h-auto"
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
             <img src="/Compra-Segura.png" alt="Compra Segura" />
           </div>
         </div>
         <div className="flex justify-center items-center">
           <img
             src="/Lift-Pagina-Nova.webp"
             alt="Pode 60 cápsulas de Lift Detox Black"
           />
         </div>
       </div>
     </section>
   </>
 );
};
