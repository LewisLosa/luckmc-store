"use client";
import { title } from "@/components/primitives";
import ProductCard from "@/components/ui/product";
import { useState } from "react";

export default function OzelRutbelerPage() {
  const [selected, setSelected] = useState("VIP");
  return (
    <main>
      <header className="flex flex-col items-center justify-center h-[20vh]">
        <h1 className={title()}>Özel Rütbeler</h1>
        <p className="text-muted-foreground text-center mt-2 max-w-sm">
          Şık ve güçlü ol.
        </p>
      </header>
      <section className="container w-full">
        <ProductCard
          name="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl="https://galeri.luckmc.net/LuckMC/spawn.avif"
          href="/urunler/ozel-rutbeler/lorem"
        />
      </section>
    </main>
  );
}
