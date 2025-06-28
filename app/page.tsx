// app/page.tsx

"use client";
import { GallerySlice } from "@/components/slices/home/galleryslice";
import DiscordSlice from "@/components/slices/home/discordslice";
import HeroSlice from "@/components/slices/home/heroslice";
import { TextReveal } from "@/components/magicui/text-reveal";
import AvantajlarScroll from "@/components/magicui/avantajlarscroll";
import FeatureSlice from "@/components/slices/home/featureslice";

export default function Home() {
  return (
    <section>
      <HeroSlice />
      <FeatureSlice />
      <TextReveal>
        Göz zevkiniz bizden sorulur, siz sadece eğlencenize bakın. 😎
      </TextReveal>
      <AvantajlarScroll />
      <GallerySlice />
      <DiscordSlice />
    </section>
  );
}
