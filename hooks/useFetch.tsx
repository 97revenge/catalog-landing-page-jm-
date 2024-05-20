"use client";

import { useEffect, useState } from "react";

export const useFetch = ({ url }: { url: string }) => {
  const [state, setState] = useState<Array<any>>([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url, {
        method: "GET",
        next: { revalidate: 3600 },
      });

      const data = await response.json();

      setState(data);
    }

    getData();
  }, []);

  return [state];
};
