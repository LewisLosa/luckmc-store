import React from "react";

export type ProductConfig = typeof productConfig;

export const productConfig = {
  categories: [
    {
      emoji: "four-leaf-clover",
      name: "Özel Rütbeler",
      description: "Şık ve güçlü ol.",
      background: "/vipler/sansplus.avif",
      cta: "Kategoriye git",
      href: "/",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      emoji: "man-farmer",
      name: "Minyonlar",
      description: "Küçük işçi ama büyük işler.",
      href: "/",
      cta: "Kategoriye git",
      background: "/minyonlar.avif",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      emoji: "key",
      name: "Kasa Anahtarları",
      description: "Bugün şanslı gününde misin?",
      href: "/",
      cta: "Kategoriye git",
      background: "https://galeri.luckmc.net/LuckMC/kasa2.avif",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      emoji: "egg",
      name: "Spawnerlar",
      description: "En hızlı para kazanma yöntemi.",
      href: "/",
      cta: "Kategoriye git",
      background: "/spawner.avif",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      emoji: "game-die",
      name: "Diğer Ürünler",
      description: "Kategorisi olmayan ama satılan ürünler.",
      href: "/",
      cta: "Kategoriye git",
      background: "/efektler.png",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ],
};
