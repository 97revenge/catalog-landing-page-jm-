"use client";

import { useTransition } from "react";
import { UtilitiesHero as ProductCart } from "../component/utilities-hero";

export const ProductSection = () => {
  const state = [
    "/api/utilities",
    "/api/lampshade",
    "/api/cables",
    "/api/acessories",
    "api/lamps",
  ];

  const [isPending, startTransition] = useTransition();

  return (
    <>
      {state.map((item) => {
        return (
          <>
            <section>
              {isPending ? (
                <>carregando</>
              ) : (
                <>
                  <ProductCart url={item} />
                </>
              )}
            </section>
          </>
        );
      })}
    </>
  );
};
