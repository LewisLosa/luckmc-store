"use client";
import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { DiscordIcon } from "../icons";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

function DiscordSection() {
  return (
    <>
      <div className="relative h-screen overflow-hidden rounded-3xl mt-[20rem]">
        <div className="container z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-10">
          <DiscordIcon className=" w-[6rem] h-full mx-auto text-white drop-shadow-2xl" />
          <h1 className="text-3xl lg:text-6xl md:text-5xl font-black text-center max-w-[48rem] mx-auto text-white drop-shadow-2xl mb-2">
            Discord Sunucumuza Katılmadın mı?
          </h1>
          <p className="text-center text-white opacity-75 font-bold">
            Kesinlikle büyük etkinlikleri kaçırıyorsun...
          </p>
          <Link
            isExternal
            className={buttonStyles({
              class: "backdrop-blur-md font-bold mx-auto absolute left-0 right-0 mt-8 w-fit",
              variant: "solid",
              color: "primary",
              radius: "full",
            })}
            href={siteConfig.links.discord}
          >
            <DiscordIcon size={20} />
            Toplulağa katıl
          </Link>
        </div>
        <ShaderGradientCanvas
          style={{
            width: "100%",
            height: "100%",
          }}
          lazyLoad={false}
          fov={undefined}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#92a8e0"
            color2="#0a31ff"
            color3="#4438cf"
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="off"
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
    </>
  );
}

export default DiscordSection;
