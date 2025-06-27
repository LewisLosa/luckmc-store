"use client";
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";

export default function AvantajlarScroll(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white h-screen w-full bg-neutral-950 grid place-content-center sticky top-0">
            <div className="absolute inset-0 z-[0] bg-gradient-to-b from-white to-green-100 dark:from-neutral-950 dark:to-green-950" />

            <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-5xl z-10 text-black dark:text-white px-4 sm:px-6 md:px-8 font-semibold text-center tracking-tight leading-[120%]">
               Kimi mağazalar ürün satar.<br></br> Biz biraz daha fazlasını yapıyoruz.
            </h1>
          </section>
        </div>

        <section className="text-white w-full bg-gradient-to-b from-green-100 to-green-400 dark:from-green-950 dark:to-green-800">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:sticky top-0 h-screen flex items-center justify-center order-1 lg:order-1">
              <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-5xl text-black px-4 sm:px-6 md:px-8 font-semibold text-center tracking-tight leading-[120%] dark:text-white">
                 Daha fazlasını<br></br> daha ucuza al
              </h1>
            </div>
            <div className="grid gap-2 order-2 lg:order-2 pb-8 lg:pb-0">
              <figure className="grid place-content-center">
                <img
                  src="https://galeri.luckmc.net/LuckMC/kasa2.avif"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 align-bottom object-cover rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem]"
                />
              </figure>
              <figure className="grid place-content-center">
                <img
                  src="/spawner.avif"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 align-bottom object-cover"
                />
              </figure>
              <figure className="grid place-content-center">
                <img
                  src="/minyonlar.avif"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 align-bottom object-cover"
                />
              </figure>
              <figure className="grid place-content-center">
                <img
                  src="/efektler.png"
                  alt=""
                  className="transition-all duration-300 w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 align-bottom object-cover rounded-b-[2rem] sm:rounded-b-[3rem] md:rounded-b-[4rem]"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-green-400 to-white dark:from-green-800 dark:to-neutral-950">
          <div className="grid lg:grid-cols-2 grid-cols-1 px-4 sm:px-6 md:px-8">
            <div className="grid gap-2 order-2 lg:order-1 pb-8 lg:pb-0">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="/vipler/yildiz.avif"
                  alt=""
                  className="transition-all duration-300 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 align-bottom object-cover rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem]"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="/vipler/yildizplus.avif"
                  alt=""
                  className="transition-all duration-300 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 align-bottom object-cover rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem]"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center drop-shadow-[0_-10px_30px_rgba(10,255,200,0.25)]">
                <img
                  src="/vipler/sans.avif"
                  alt=""
                  className="transition-all duration-300 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 align-bottom object-cover rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem]"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center drop-shadow-[0_-20px_60px_rgba(10,255,200,0.25)]">
                <img
                  src="/vipler/sansplus.avif"
                  alt=""
                  className="transition-all duration-300 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 align-bottom object-cover rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem]"
                />
              </figure>
            </div>
            <div className="lg:sticky top-0 h-screen grid place-content-center order-1 lg:order-2">
              <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-5xl px-4 sm:px-6 md:px-8 font-semibold text-center tracking-tight leading-[120%]">
                Sadece güçlü değil.<br></br> Stil sahibi ol.
              </h1>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}