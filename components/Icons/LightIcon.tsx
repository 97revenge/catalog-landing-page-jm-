import Image from "next/image";

export default function LightIcon({ style }: { style: string }) {
  return (
    <>
      <Image
        className={style}
        src={"https://api.iconify.design/material-symbols:backlight-high.svg"}
        width={30}
        height={30}
        alt="Light Icon"
      />
    </>
  );
}
