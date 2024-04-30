import { Button } from "@/components/ui/button";
import { GiftIcon, FlameIcon, LightbulbIcon } from "lucide-react";
import Image from "next/image";
import { Html } from "@react-email/components";
import Link from "next/link";

export default function CouponHero() {
  return (
    <>
      <Html>
        <div className="w-full flex flex-col items-center justify-center px-auto my-12">
          <img
            src={
              "https://images.tcdn.com.br/files/1112215/themes/1/img/settings/koh.png"
            }
            height={485}
            width={485}
            alt="icon "
            className="py-2"
          />
          <section className="w-full py-12 md:py-24 lg:py-42 animated-background bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="w-full flex items-center justify-center">
                      <Image
                        src={
                          "https://d335luupugsy2.cloudfront.net/cms/files/30276/1714055729/$thccn6w6b1k"
                        }
                        quality={100}
                        height={85}
                        width={85}
                        alt="icon "
                      />
                    </div>
                    <h1 className="text-center text-4xl font-bold tracking-tighter text-white sm:text-6xl xl:text-7xl">
                      Cupom Exclusivo para Voçe
                    </h1>
                  </div>
                </div>
                <div className="h-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
                  <div className="p-6 space-y-4">
                    <div className="bg-gray-100 rounded-md px-4 py-2 text-center">
                      <span className="text-4xl font-bold text-[#ffc728] ">
                        PRIMEIRA100
                      </span>
                    </div>
                    <p className="text-gray-500 text-center">
                      Tenha até 40% de desconto em nosso e-commerce
                    </p>
                    <div className="w-full flex items-center justify-center">
                      <Button
                        size={"lg"}
                        className="w-auto flex items-center justify-center animated-background bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-500"
                      >
                        <GiftIcon className="mr-2 w-5 h-5" />
                        <span className="text-center text-2xl">
                          <Link
                            href={
                              "https://www.jmluzearte.com.br/utilidades?cupom=PRIMEIRA100"
                            }
                            target="blank
                          "
                          >
                            {" "}
                            Garantir Cupom{" "}
                          </Link>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 -mt-4 -ml-4">
                    <FlameIcon className="text-yellow-500 w-8 h-8" />
                  </div>
                  <div className="absolute bottom-0 right-0 -mb-4 -mr-4">
                    <LightbulbIcon className="text-[#8B5CF6] w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Html>
    </>
  );
}
