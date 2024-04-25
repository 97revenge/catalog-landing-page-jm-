

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export function HighlightsCard() {
  return (
    <div className="max-w-md mx-auto ">
      <Card className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <Badge className="bg-yellow-500 text-white px-2 py-1 rounded-full" variant="outline">
            <StarIcon className="h-4 w-4 -translate-x-1 animate-pulse" />
            Produto em destaque  
          </Badge>
          <Badge className="bg-red-500 text-white px-2 py-1 rounded-full" variant="outline">
            45% de desconto
          </Badge>
        </div>
        <img
          alt="Featured Product"
          className="h-64 w-full object-fit group-hover:scale-105 transition-transform duration-300"
          height={400}
          src="https://images.tcdn.com.br/img/img_prod/1112215/extensao_usb_reforcada_com_tecido_trancado_1_85_metros_361_1_5d6adef66ebe33c1acf1ef14892d0007.png"
          style={{
            aspectRatio: "500/400",
            objectFit: "cover",
          }}
          width={500}
        />
        <CardContent className="p-6 bg-white dark:bg-gray-950">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Extensão USB Reforçada Com Tecido Trançado</h3>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">10.0</span>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Extensão USB com cabo trançado super resistente. <b>Inovação & qualidade no mesmo produto.</b>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-50 font-semibold">
              <CurrencyIcon className="h-5 w-5" />
              <span className="px-2"><span className="text-red-500  ">79,99</span> por <span className="px-1 text-green-500 text-3xl">59,99</span> </span>
            </div>
            <Link href={"https://www.jmluzearte.com.br/utilidades/extensao-usb-reforcada-com-tecido-trancado-1-85-metros"}  target="_blank">
            <Button className="w-full max-w-[150px] bg-green-500" size="lg">
              Comprar Agora
            </Button></Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CurrencyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
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
  )
}
