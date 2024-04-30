"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useTransition } from "react";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string>("");

  const handler = () => {
    const start: void = startTransition(async function call() {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status == 200 || response.statusText == "OK") {
        alert("emails enviados com sucesso");
      } else {
        alert("algo deu errado");
      }
    });
    return start;
  };

  return (
    <>
      <div>
        <Button disabled={isPending}>{isPending}</Button>
      </div>
    </>
  );
}
