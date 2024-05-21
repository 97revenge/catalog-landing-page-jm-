import { InitialHero as Hero } from "@/components/component/initial-hero";
import { InitialHeader as Header } from "@/components/component/initial-header";
import { AcessHero as Acess } from "@/components/component/acess-hero";
import { PaymentHero as Payment } from "@/components/component/payment-hero";
import { LampshadeHero as LampShade } from "@/components/component/lampshade-hero";
import { CablesHero as Cables } from "@/components/component/cables-hero";
import { AcessoriesHero as Acessories } from "@/components/component/acessories-hero";
import { LampsHero as Lamps } from "@/components/component/lamps-hero";
import { UtilitiesHero as ProductCart } from "@/components/component/utilities-hero";
import { SocialHero as Social } from "@/components/component/social-hero";
import { InitialFooter } from "@/components/component/initial-footer";

import { FadeUpStagger as Up } from "@/components/Animations/FadeUpStagger";
import { CounponHero as Counpon } from "@/components/component/counpon-hero";
import { TestimonialsCard } from "@/components/component/testimonials-card";
import { LocationHero } from "@/components/component/location-hero";
import { ChatButton } from "@/components/Buttons/ChatButton";
import { ChatLayout } from "@/components/Credenza/ChatLayout";
import { HighlighHero } from "@/components/component/highligh-hero";
export default async function Home() {
  return (
    <>
      <Up>
        <div className="bg-gray-100/20">
          <ChatLayout>
            <ChatButton />
          </ChatLayout>
          <Header />
          <Hero />
          <HighlighHero />
          <ProductCart url="/api/utilities" />
          <LampShade />
          <Cables />
          <Acessories />
          <Lamps />
          <Counpon />
          <TestimonialsCard />
          <LocationHero />
          <Social />
          <Acess />
          <Payment />
          <InitialFooter />
        </div>
      </Up>
    </>
  );
}
