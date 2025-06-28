// components/ProductCard.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils"; // shadcn/ui'dan gelen veya kendi oluşturduğunuz yardımcı fonksiyon

// Component'in alacağı props'ları tanımlıyoruz
interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  href: string; // "Satın Al" linkinin yönleneceği adres
  className?: string;
}

const ProductCard = ({
  name,
  description,
  imageUrl,
  href,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "relative group aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl shadow-lg",
        "transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        className // Dışarıdan ek class'lar ekleyebilmek için
      )}
    >
      {/* Arkaplan Resmi */}
      <Image
        src={imageUrl}
        alt={`Image for ${name}`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Yazının okunabilirliğini artırmak için arkaplan ve metin arasına eklenen gradient katman */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Sol Alttaki İçerik Alanı */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm text-gray-200">{description}</p>
          
          {/* Satın Al Linki */}
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-gray-300"
          >
            Satın Al
            {/* Ok ikonu - linkin üzerine gelince hafifçe sağa kayar */}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;