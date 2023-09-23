"use client";

import security_buy from "@/assets/compra-segura.png";

import { Button } from "@/components/ui/button";
import { Customers } from "@/data/customers";
import Image from "next/image";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

interface ShowCustomersProps {}

export const ShowCustomers = (props: ShowCustomersProps) => {
  return (
    <section className="bg-green-950 py-10 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-2">
          Um produto perfeito para auxiliar no seu emagrecimento
        </h1>
        <p>
          São mais de 30 mil pessoas tomando o Lift Detox Black diariamente.
        </p>

        <div className="my-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {Customers.map((customer) => (
              <SwiperSlide key={customer.id}>
                <figure>
                  <Image
                    src={customer.src}
                    alt={customer.name}
                    className="rounded-sm border-2 border-secondary max-w-full"
                    width={565}
                    height={565}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col space-y-2 max-w-lg mx-auto">
          <Button className="btn-bg2 py-8 text-lg">
            QUERO MEU LIFT DETOX BLACK
          </Button>
          <Image
            src={security_buy}
            alt="Compra Segura"
            width={450}
            height={450}
            className="max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
