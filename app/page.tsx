import { InitialHero as Hero } from "@/components/component/initial-hero";
import { InitialHeader as Header } from "@/components/component/initial-header";
import { AcessHero as Acess } from "@/components/component/acess-hero";
import { PaymentHero as Payment } from "@/components/component/payment-hero";
import { LampshadeHero as LampShade } from "@/components/component/lampshade-hero";
import { CablesHero as Cables } from "@/components/component/cables-hero";
import { AcessoriesHero as Acessories } from "@/components/component/acessories-hero";
import { LampsHero as Lamps } from "@/components/component/lamps-hero";
import { SocketsHero as Socket } from "@/components/component/sockets-hero";
import { UtilitiesHero as Utilities } from "@/components/component/utilities-hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LampShade />
      <Cables />
      <Acessories />
      <Lamps />
      <Socket />
      <Utilities />
      <Acess />
      <Payment />
    </>
  );
}
