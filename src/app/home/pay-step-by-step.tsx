"use client";

import how_check from "@/assets/Como-Comprar-Checkout_2-1.gif";
import security_buy from "@/assets/Compra-Segura-Black.png";

import { Button } from "@/components/ui/button";
import { handleScroll } from "@/lib/scrollLink";
import Image from "next/image";
interface PayStepByStepProps {}
export const PayStepByStep = (props: PayStepByStepProps) => {
  return (
    <section className="bg-white text-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col text-center space-y-4">
        <h1 className="text-3xl font-bold">
          Passo a passo de como realizar sua compra:
        </h1>
        <Image
          src={how_check}
          alt="Passo a passo de como realizar sua compra"
          className="max-w-full"
        />
        <p>
          Após escolher seu kit e clicar no botão “COMPRAR AGORA” você será
          redirecionado para uma das maiores e mais seguras plataformas de
          pagamentos da América Latina, a Monetizze.
        </p>
        <h2 className="font-bold">SIGA O PASSO A PASSO</h2>
        <p>1 – Preencha seus dados corretamente, Nome, Endereço.</p>
        <p>2 – E os dados do seu cartão de crédito, (pix e boleto também).</p>
        <p>3 – Clique no botão verde indicando “COMPRAR AGORA” e pronto!</p>
        <p>
          Viu como é Fácil? Logo após você receberá a confirmação do seu pedido
          no e-mail escolhido e assim que seu pedido for postado você também
          receberá o código de rastreamento do seu pedido. Não perca mais tempo,
          clique agora no botão abaixo e adquira seu Lift Detox Black.
        </p>
        <div className="flex flex-col space-y-2 max-w-lg mx-auto">
          <Button
            className="btn-bg2 btn-lg"
            onClick={() => handleScroll("kits")}
          >
            QUERO MEU LIFT DETOX BLACK
          </Button>
          <Image
            src={security_buy}
            alt="Compra Segura"
            className="max-w-full invert"
          />
        </div>
      </div>
    </section>
  );
};
