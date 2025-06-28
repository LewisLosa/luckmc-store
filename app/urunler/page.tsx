"use client";
import { title } from "@/components/primitives";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { productConfig } from "@/config/products";

export default function PricingPage() {
  return (
    <main>
      <header className="flex flex-col items-center justify-center h-[20vh]">
        <h1 className={title()}>Ürünler</h1>
        <p className="text-muted-foreground text-center mt-2 max-w-sm">
          Sadece güçlü değil, stil sahibi ol.
        </p>
      </header>
      <section>
        <BentoGrid className="container w-[50rem] lg:grid-rows-3">
          {productConfig.categories.map((category) => (
            <BentoCard key={category.name} {...category} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
