import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { JSX, SVGProps } from "react";

export function HighlightsCard() {
  return (
    <div className="max-w-md mx-auto ">
      <Card className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <Badge
            className="bg-yellow-500 text-white px-2 py-1 rounded-full"
            variant="outline"
          >
            <StarIcon className="h-4 w-4 -translate-x-1 animate-pulse" />
            Produto em destaque
          </Badge>
          <Badge
            className="bg-red-500 text-white px-2 py-1 rounded-full"
            variant="outline"
          >
            25% de desconto
          </Badge>
        </div>
        <img
          alt="Featured Product"
          className=" group-hover:scale-105 transition-transform duration-300"
          height={350}
          src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lv0fjdzqm10d30"
          style={{
            aspectRatio: "500/400",
            objectFit: "cover",
          }}
          width={500}
        />
        <CardContent className="p-6 bg-white dark:bg-gray-950">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">
              Extensão de 3 entradas Com Tecido Trançado 2 METROS
            </h3>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                9.5
              </span>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Extensão com cabo trançado super resistente.{" "}
            <b>Inovação & qualidade no mesmo produto.</b>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-50 font-semibold">
              <CurrencyIcon className="h-12 w-12 current-fill text-yellow-500 shadow-xl text-xl rounded-full bg-gray-200" />
              <span className="px-2">
                <span className="text-red-500  ">72,00</span> por{" "}
                <span className="px-1 text-green-500 text-3xl">52,90</span>{" "}
              </span>
            </div>
            <Link
              href={
                "https://shopee.com.br/Extens%C3%A3o-3-entradas-com-cabo-Tran%C3%A7ado-2mt-i.562459802.19597682352?xptdk=22df062c-9ee7-4ef3-a11a-d60cee813163"
              }
              target="_blank"
            >
              <Button className="w-full max-w-[150px] bg-green-500" size="lg">
                Comprar Agora
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CurrencyIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fill-opacity="0"
        stroke="currentColor"
        stroke-dasharray="32"
        stroke-dashoffset="32"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.5s"
          values="32;0"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.5s"
          dur="0.5s"
          values="0;1"
        />
        <animate
          attributeName="d"
          dur="1.5s"
          repeatCount="indefinite"
          values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"
        />
      </path>
    </svg>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
