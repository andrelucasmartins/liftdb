import { Assurance } from "./home/assurance";
import { CompositionProduct } from "./home/composition-product";
import { Hero } from "./home/hero";
import { HowFunction } from "./home/how-function";
import { ShowCustomers } from "./home/show-customers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CompositionProduct />
      <ShowCustomers />
      <HowFunction />
      <Assurance />
    </main>
  );
}
