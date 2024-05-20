import { JSX, SVGProps } from "react";

import { Button } from "@/components/ui/button";
export function QuestionComponent() {
  return (
    <section className="w-full ">
      <div className="container  space-y-4 grid  px-4 md:px-6">
        <div className="flex flex-col">
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <Button
              type="submit"
              className=" bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
            >
              <LineMdChat className="w-10 h-10 text-primary fill-current text-blue-500" />
              <h3 className="text-2xl font-bold text-white">Quem somos ?</h3>
            </Button>
          </div>
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <Button
              type="submit"
              className=" bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
            >
              <LineMdLightbulb className="w-10 h-10 text-primary current fill text-blue-500" />
              <h3 className="text-2xl font-bold text-white">
                Com o que trabalhamos?{" "}
              </h3>
            </Button>
          </div>
          <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent group-hover:from-blue-900/80 rounded-lg" />
            <Button
              type="submit"
              className=" bg-transparent hover:bg-transparent w-full relative p-6 flex flex-col items-start gap-4 h-full"
            >
              <LineMdCompassLoop className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-white">Onde estamos ? </h3>
            </Button>
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

export function LineMdLightbulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="46"
        strokeDashoffset="46"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17H9V14.1973C7.2066 13.1599 6 11.2208 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 11.2208 16.7934 13.1599 15 14.1973V17z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="46;0"
        ></animate>
      </path>
      <rect width="6" height="0" x="9" y="20" fill="currentColor" rx="1">
        <animate
          fill="freeze"
          attributeName="height"
          begin="0.5s"
          dur="0.2s"
          values="0;2"
        ></animate>
      </rect>
    </svg>
  );
}

export function LineMdCompassLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <mask id="lineMdCompassLoop0">
        <path
          fill="none"
          stroke="#282c34"
          strokeDasharray="60"
          strokeDashoffset="60"
          strokeLinecap="round"
          strokeWidth="2"
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
        </path>
        <path fill="#fff" d="M11 11L12 12L13 13L12 12z">
          <set attributeName="opacity" begin="0.6s" to="1"></set>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.6s"
            dur="0.3s"
            values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
          ></animate>
          <animateTransform
            attributeName="transform"
            begin="0.5s"
            dur="9s"
            repeatCount="indefinite"
            type="rotate"
            values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
          ></animateTransform>
        </path>
        <circle cx="12" cy="12" r="1" fillOpacity="0">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.8s"
            dur="0.3s"
            values="0;1"
          ></animate>
        </circle>
      </mask>
      <rect
        width="24"
        height="24"
        fill="currentColor"
        mask="url(#lineMdCompassLoop0)"
      ></rect>
    </svg>
  );
}

export function LineMdChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="68"
          strokeDashoffset="68"
          d="M3 19.5V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H5.5z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="68;0"
          ></animate>
        </path>
        <path strokeDasharray="10" strokeDashoffset="10" d="M8 7h8" opacity="0">
          <set attributeName="opacity" begin="0.7s" to="1"></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="10;0"
          ></animate>
        </path>
        <path
          strokeDasharray="10"
          strokeDashoffset="10"
          d="M8 10h8"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.8s" to="1"></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="10;0"
          ></animate>
        </path>
        <path strokeDasharray="6" strokeDashoffset="6" d="M8 13h4" opacity="0">
          <set attributeName="opacity" begin="0.9s" to="1"></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
