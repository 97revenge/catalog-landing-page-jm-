"use client";

import QRCode, { QRCodeProps } from "react-qr-code";

import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";

const code: QRCodeProps = {
  value: "https://www.jmluzearte.com.br/",
  amplitude: 10,
};

export function InitialFooter() {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-200  to-blue-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.tcdn.com.br/img/img_prod/1112215/1652709121_icone-_2_9_1.ico?66332ea111b8d"
            }
            width={72}
            height={72}
            alt="e-commerce icon @jmluzearte"
            quality={100}
          />
          <div className="space-y-1">
            <div className="flex flex-col w-full ">
              <span className="flex flex-col  w-full text-center">
                <h3 className="text-xl flex flex-row gap-x-1 items-center font-bold">
                  <InstagramIcon className="current-fill text-red-700" />
                  @jmluzearte
                </h3>
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-400 max-w-[300px]">
              A JM Luz e arte transforma e desenvolve ideias em realidade,
              customizando cabos e luminárias em peças decorativas. O que
              proporciona uma experiência positiva aos nosso clientes,
            </p>
          </div>
        </div>
        <div className="w-auto bg-gray-200 rounded-xl flex flex-row items-center justify-center p-2">
          <div className="bg-white p-4 rounded-lg shadow-lg dark:bg-gray-950 ">
            <QRCode
              value={code.value}
              amplitude={code.amplitude}
              className="w-36 p-2 h-36 shadow-xl"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function InstagramIcon(
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ShoppingCartIcon(
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
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
