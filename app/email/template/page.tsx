"use client";

import { MothersDayComponent } from "@/components/Email/MothersDayComponent";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  if (search === "MAE100") {
    return (
      <>
        <MothersDayComponent />
      </>
    );
  }

  return (
    <>
      <div>{JSON.stringify(search)}</div>
    </>
  );
}
