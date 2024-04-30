import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { JSX, SVGProps } from "react";

export function InitialEmail() {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white">
      <CardContent className="flex flex-col items-center justify-center p-10 space-y-4">
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
        <h1 className="text-3xl text-center font-extrabold sm:text-5xl">
          Desconto
          <strong className="font-extrabold  sm:block"> Exclusivo </strong>
        </h1>
      </CardContent>
    </Card>
  );
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
