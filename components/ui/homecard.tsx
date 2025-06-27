"use client";

import { Card, CardBody } from "@heroui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { title, subtitle } from "../primitives";

interface HomeCardProps {
  cardtitle?: string;
  description?: string;
  background?: string;
  className?: string;
  className1?: string;
}

export default function HomeCard({
  cardtitle,
  description,
  background,
  className = "",
  className1 = "",
}: HomeCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`shadow-none rounded-[2.9rem] relative overflow-hidden ${className}`}
    >
      <MagicCard
        gradientColor={theme === "#ffffff86" ? "#" : "#ffffff86"}
        gradientSize={300}
        gradientOpacity={0.4}
        className="p-1 z-1 rounded-[3rem]"
      >
        <div
          className={`relative p-6 min-h-[15rem] flex flex-col justify-end ${className1}`}
        >
          {background && (
            <img
              src={background}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 rounded-[3rem]"
            />
          )}

          <div className="relative z-10">
            {" "}
            <span className={title({ size: "md" })}>{cardtitle}</span>
            <span className={subtitle()}>{description}</span>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
