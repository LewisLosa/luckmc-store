import { cn } from "@/lib/utils";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  backgroundImage,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundImage?: string | StaticImageData;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-xl bg-white p-4 transition duration-200   border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Arka plan görüntüsü"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <GlowingEffect
        className="absolute inset-[2] rounded-xl z-[10]"
        spread={30}
        glow={true}
        borderWidth={3}
        disabled={false}
        proximity={150}
        inactiveZone={0.01}
      />
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-white to-transparent dark:from-black" />

      <div className="relative z-10">{header}</div>
      <div className="relative z-10 transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
