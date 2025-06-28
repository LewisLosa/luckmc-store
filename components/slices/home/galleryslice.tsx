"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export function GallerySlice() {
  // Veriler component içinde kalabilir, ancak kullanımları dinamik olacak.
  const images = [
    "https://galeri.luckmc.net/LuckMC/spawngenel.avif",
    "https://galeri.luckmc.net/LuckMC/spawn.avif",
    "https://galeri.luckmc.net/LuckMC/avantajlar.avif",
    "https://galeri.luckmc.net/LuckMC/hizlierisim.avif",
    "https://galeri.luckmc.net/LuckMC/koylutakas.avif",
    "https://galeri.luckmc.net/LuckMC/balikci.avif",
    "https://galeri.luckmc.net/LuckMC/metintasi.avif",
    "https://galeri.luckmc.net/LuckMC/ada1.avif",
    "https://galeri.luckmc.net/LuckMC/ada2.avif",
    "https://galeri.luckmc.net/LuckMC/adatabela.avif",
    "https://galeri.luckmc.net/LuckMC/barci.avif",
    "https://galeri.luckmc.net/LuckMC/kasa1.avif",
    "https://galeri.luckmc.net/LuckMC/kasa2.avif",
  ];

  return (
    // 1. Ana kapsayıcı relative kalmalı, `overflow-hidden` eklemek kenar yuvarlaklığını korur.
    <div className="m-20">
      <div className="relative mx-auto mt-20 max-w-7xl rounded-3xl ring-2 p-2 bg-neutral-950 overflow-hidden">
        {/* Arka plan galerisi */}
        <ThreeDMarquee className="blur-sm" images={images} />

        {/* 2. Responsive katman: `absolute inset-0` ile tüm alanı kaplar.
           `flex` ve ilgili class'lar ile içeriği her ekranda mükemmel ortalar.
      */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 p-4 text-center">
          {/* 3. Responsive yazı boyutları */}
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl md:text-6xl">
            Fotoğrafları Beğendin mi?
          </h1>
          <p className="text-2xl text-white drop-shadow-2xl md:text-3xl">
            Dahası var...
          </p>
          <RainbowButton className="w-fit rounded-xl">
            <Link
              href="https://galeri.luckmc.net"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              galeri.luckmc.net
            </Link>
          </RainbowButton>
        </div>
      </div>
    </div>
  );
}
