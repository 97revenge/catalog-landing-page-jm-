import { JSX, SVGProps } from "react";

import { Button } from "@/components/ui/button";
export function QuestionComponent() {
  return (
    <section className="w-full ">
      <div className="container  space-y-4 grid  px-4 md:px-6">
        <div className="flex flex-col">
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <Button className=" bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full">
              <RocketIcon className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-white">Quem somos ?</h3>
            </Button>
          </div>
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <div className="relative p-6 flex flex-col items-start gap-4 h-full">
              <BriefcaseIcon className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-white">Onde estamos ?</h3>
            </div>
          </div>
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <div className="relative p-6 flex flex-col items-start gap-4 h-full">
              <CogIcon className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-white">
                Quais são os nossos produtos ?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoltIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function BriefcaseIcon(
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CogIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
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
