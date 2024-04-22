import Image from "next/image";

export default function WhatsAppIcon({ style }: { style: string }) {
  return (
    <>
      <Image
        className={style}
        src={"https://api.iconify.design/ic:baseline-whatsapp.svg"}
        width={100}
        height={100}
        alt="Light Icon"
      />
    </>
  );
}
