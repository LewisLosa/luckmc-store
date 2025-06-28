import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon } from "@/components/icons";
import { addToast, Button } from "@heroui/react";

export default function HeroSlice() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-hidden min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 h-full opacity-40 w-full aspect-auto object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white  dark:from-neutral-950 to-transparent z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative -mt-40 z-20 inline-block max-w-xl text-center justify-center">
        <span className={title()}>Sıkıcı sunucuları listeden&nbsp;</span>
        <span className={title({ color: "pink" })}>sil!&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Tatlı, rekabetçi ve eğlenceli bir deneyime hazır mısın?
        </div>
      </div>

      <div className="relative z-20 flex gap-3">
        <Button
          variant="flat"
          className={buttonStyles({
            variant: "flat",
            class: "backdrop-blur-md",
            color: "success",
            radius: "full",
          })}
          onPress={() => {
            addToast({
              color: "success",
              title: "Sunucu adresi başarıyla kopyalandı!",
              description:
                "Sunucu adresini Minecraft'a yapıştırarak sunucuya katılabilirsin.",
              timeout: 5000,
              shouldShowTimeoutProgress: true,
            });
            navigator.clipboard.writeText(siteConfig.links.minecraftServer);
          }}
        >
          Sunucuya katıl
        </Button>
        <Link
          isExternal
          className={buttonStyles({
            class: "backdrop-blur-md",
            variant: "bordered",
            radius: "full",
          })}
          href={siteConfig.links.discord}
        >
          <DiscordIcon size={20} />
          Toplulağa katıl
        </Link>
      </div>

      <div className="relative z-20 mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Özelliklere göz atmak için{" "}
            <Code color="warning">aşağıya kaydır...</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
