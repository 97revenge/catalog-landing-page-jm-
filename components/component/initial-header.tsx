"use client";

import Image from "next/image";

export function InitialHeader() {
  return (
    <header className="w-full py-4 md:py-6">


      <div className="container flex items-center gap-4 px-4 md:gap-6 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 bg-blue-900 rounded-full animate-bounce" />
          <div className="h-3 w-3 bg-yellow-200 rounded-full animate-bounce" />
        </div>
        <div className="flex items-center justify-center flex-1">
          <Image
            className="rounded-full object-cover"
            width={400}
            height={400}
            quality={100}
            alt="https://www.jmluzearte.com.br/"
            src={
              "https://images.tcdn.com.br/files/1112215/themes/1/img/settings/koh.png"
            }
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 bg-blue-900 rounded-full animate-bounce" />
          <div className="h-3 w-3 bg-yellow-200 rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
}
