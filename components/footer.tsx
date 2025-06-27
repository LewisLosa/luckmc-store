import Link from "next/link";
// Heroicons kütüphanesinden ikonları import ediyoruz
import {
  CodeBracketIcon, // GitHub & Gitea için genel kod/repo ikonu
  RssIcon,
  ChatBubbleOvalLeftEllipsisIcon, // Discord için sohbet ikonu
} from "@heroicons/react/24/solid"; // Outline stilini kullanıyoruz

import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  TiktokIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

// İnsanlar verisi aynı kalıyor
const humans = [
  {
    name: "losa.dev",
    link: "https://losa.dev",
    role: "Baş Geliştirici",
    color: "text-yellow-400",
  },
  {
    name: "Sheen_Tne",
    link: "#",
    role: "Topluluk Yöneticisi",
    color: "text-emerald-400",
  },
  {
    name: "Tikzii",
    link: "https://www.instagram.com/bxkir58/",
    role: "Discord Sunucu & Bot",
    color: "text-blue-400",
  },
];

// Sosyal medya linkleri ve yeni heroicons ikonları
const socials = [
  { name: "Instagram", href: siteConfig.links.instagram, icon: InstagramIcon },
  { name: "Tiktok", href: siteConfig.links.tiktok, icon: TiktokIcon },
  { name: "Discord", href: siteConfig.links.discord, icon: DiscordIcon },
  { name: "GitHub", href: siteConfig.links.github, icon: GithubIcon },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-black to-neutral-950 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Üst Kısım: Linkler ve İnsanlar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-16">
          {/* Humans Bölümü */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              İnsanlar
            </h3>
            <div className="mt-4 space-y-2 text-base">
              {humans.map((human) => (
                <p key={human.name}>
                  <Link
                    href={human.link}
                    target="_blank"
                    className="font-medium text-white"
                  >
                    {human.name}
                  </Link>
                  <span className={`ml-2 ${human.color}`}>
                    [ {human.role} ]
                  </span>
                </p>
              ))}
            </div>
          </div>

          {/* Orta Boşluk */}
          <div className="hidden md:block md:col-span-2 lg:col-span-3"></div>

          {/* Links ve Socials Bölümleri */}
          <div className="md:col-span-5 lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                Bağlantılar
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    LuckCoin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                Sosyal Medya
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4 w-28">
                {socials.map((social) => (
                  <Link
                    target="_blank"
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <social.icon className="h-8 w-8" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım: Lisans ve Motto */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-500 text-center sm:text-left mb-2 sm:mb-0">
            © LuckMC - Mağaza 2025.
          </p>
          <p className="text-xs font-semibold text-neutral-500">
            Bu site{" "}
            <Link
              href="https://losa.dev"
              target="_blank"
              className="text-white"
            >
              losa.dev
            </Link>{" "}
            tarafından 💚 ile geliştirildi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
