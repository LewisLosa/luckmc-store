// app/page.tsx

"use client";
import { title } from "@/components/primitives";
import { Sparkles } from "@/components/sparkles";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GaleriLuckMC } from "@/components/ui/galeriluckmc";
import DiscordSection from "@/components/ui/discordsection";
import HomeHero from "@/components/ui/homehero";
import { TextReveal } from "@/components/magicui/text-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import AvantajlarScroll from "@/components/magicui/avantajlarscroll";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <section>
      <HomeHero />
      <div className="container mx-auto mt-[150px] flex flex-col items-center justify-center">
        <div className="relative  h-80 w-screen overflow-hidden [mask-image:radial-gradient(30%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgb(255_0_255),transparent_50%)] before:opacity-70 before:animate-hue-cycle after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-300 dark:after:bg-zinc-900">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:80px_80px] "></div>

          <Sparkles
            density={500}
            size={2}
            direction="top"
            color="#ffffff"
            className="absolute inset-x-0 top-0 h-full w-full dark:[mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-52  w-screen max-w-2xl relative z-10">
          <div className="bg-white border-solid border-3 border-neutral-300 p-4  w-28 h-28 mx-auto grid place-content-center rounded-full">
            <div className=" w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-black rounded-lg before:absolute relative before:w-full before:h-full before:bg-black/50 before:rounded-lg before:-top-2 before:-left-2"></div>
          </div>
        </div>

        <article className="text-white  pt-2 w-2/3 mx-auto block text-center z-10 relative ">
          <h1 className="text-center text-5xl dark:text-white text-neutral-800 font-medium py-3">
            Özellikler
          </h1>
        </article>
      </div>
      <BentoGrid className="max-w-6xl pt-12 mx-auto md:auto-rows-[20rem] mb-[12rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
            backgroundImage={item.backgroundImage}
          />
        ))}
      </BentoGrid>
      <TextReveal>
        Göz zevkiniz bizden sorulur, siz sadece eğlencenize bakın. 😎
      </TextReveal>
      <AvantajlarScroll />
      <div className="container mx-auto p-4">
        <GaleriLuckMC />
        <DiscordSection />
      </div>
    </section>
  );
}
const items = [
  {
    title: "Performanslı",
    description:
      "Modern çözümleri kullanarak performanslı bir deneyim yaşatıyoruz.",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    backgroundImage: "https://galeri.luckmc.net/LuckMC/spawngenel.avif",
  },
  {
    title: "Yenilik Odaklı",
    description: "Yeni bir sistem çıktığında en geç 5 iş günü sunucumuzda :)",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    backgroundImage: "https://galeri.luckmc.net/LuckMC/spawn.avif",
  },
  {
    title: "Tasarımcı Tarafından Geliştirildi",
    description: "Her şeyi düşünerek ye",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    backgroundImage: "https://galeri.luckmc.net/LuckMC/ada1.avif",
  },
  {
    title: "Her Şey Olması Gerektiği Yerde",
    description:
      "Biliyoruz ki, spawn'da genelde 40 npc olur, bizde gerektiği kadar var.",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    backgroundImage: "https://galeri.luckmc.net/LuckMC/hizlierisim.avif",
  },
];
