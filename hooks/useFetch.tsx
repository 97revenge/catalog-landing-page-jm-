"use client";

import next from "next";
import { useTransition, useEffect, useState } from "react";

export const useFetch = ({ url }: { url: string }) => {
  const [state, setState] = useState<Array<any>>([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const response = await fetch(url, {
        method: "GET",
        next: { revalidate: 3600 },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setState(data);
    });
  }, []);

  return { state, isPending };
};
