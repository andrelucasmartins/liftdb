import { Assurance } from "./home/assurance";
import { CompositionProduct } from "./home/composition-product";
import { FirstShopOnline } from "./home/first-shop-online";
import { Hero } from "./home/hero";
import { HowFunction } from "./home/how-function";
import { Manufacturing } from "./home/manufacturing";
import { ShowCustomers } from "./home/show-customers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CompositionProduct />
      <ShowCustomers />
      <HowFunction />
      <Manufacturing />
      <FirstShopOnline />
      <Assurance />
    </main>
  );
}
