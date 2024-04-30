"use client";

import QRCode, { QRCodeProps } from "react-qr-code";

import Link from "next/link";
import { JSX, SVGProps } from "react";

export function InitialFooter() {
  return (
    <footer className="flex flex-col animate-background items-center justify-between gap-y-4  py-8 px-4 md:flex-row md:gap-0 md:py-12 md:px-6 bg-gradient-to-r from-blue-100  to-blue-800 text-white">
      <div className="flex items-center gap-4  ">
        <img
          alt="Logo"
          className="rounded-full"
          height={72}
          src="https://images.tcdn.com.br/img/img_prod/1112215/1652709121_icone-_2_9_1.ico?6627e7696191c"
          style={{
            aspectRatio: "32/32",
            objectFit: "cover",
          }}
          width={72}
        />
        <div className="grid gap-1  ">
          <h4 className="text-2xl  flex flex-row font-semibold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="current-fill  text-[#ff0a63] "
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            jmluzearte
          </h4>
          <p className="text-md text-gray-800 pr-40 max-w-xl ">
            A JM Luz e arte transforma e desenvolve ideias em realidade,
            customizando cabos e luminárias em peças decorativas. O que
            proporciona uma experiência positiva aos nosso clientes,
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-full  flex items-center justify-center ">
          <QRCode
            size={106}
            value={"https://www.jmluzearte.com.br/"}
            viewBox={`0 0 256 256`}
            className="rounded-md border border-4 shadow-xl"
          />
        </div>
      </div>
    </footer>
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
