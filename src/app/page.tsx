import { CompositionProduct } from "./home/composition-product";
import { Hero } from "./home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <CompositionProduct />
    </main>
  );
}
