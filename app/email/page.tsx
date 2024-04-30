"use client";

import { Email } from "@/components/Email/email";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";

export default function Page() {
  const [view, setView] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleView = () => {
    if (view === false) {
      setView(!view);
    }
  };

  const send = (value: any) => {
    try {
      startTransition(async () => {
        const response = await fetch(`/api/email`, {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status == 200 || response.statusText == "OK") {
          alert("email send");
          console.log("email send ! ");
        } else {
          alert("email not send");
          console.log("not send ... ");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isPending) {
    return (
      <>
        <div className="w-screen h-screen flex items-center justify-center bg-blue-200/50 ">
          <span>Carregando ...</span>
        </div>
      </>
    );
  }

  return (
    <>
      {view === true ? (
        <Email />
      ) : (
        <>
          <Button onClick={() => send("enviado")}>Send Email</Button>

          <Button onClick={() => handleView()}> show example </Button>
        </>
      )}
    </>
  );
}
