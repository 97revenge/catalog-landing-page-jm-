import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import { PaymentHero } from "./payment-hero";

export function AcessHero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex items-center space-x-2">
              <SmartphoneIcon className="h-6 w-6" />
              <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Entre com o seu numero
              </p>
            </div>
            <h1 className=" w-full h-full pb-6 text-3xl my-12 bg-red-200 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
              Partiçipe do nosso grupo VIP
            </h1>
            <p className=" relative bottom-2 max-w-[600px] underline text-gray-500 dark:text-gray-400">
              Para ter acesso a promoções & sorteios
            </p>
            <div className="w-auto p-2  space-y-2">
              <div className="flex justify-center items-center">
                <Button
                  variant={"default"}
                  size="lg"
                  className="w-full  mx-auto shadow-md h-full  text-3xl lg:text-6xl bg-[#50c55a] hover:bg-lime-200"
                >
                  Entrar no grupo VIP{" "}
                  <span className="p-2">
                    <WhatsAppIcon style={""} />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SmartphoneIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
