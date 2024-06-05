import { InitialHero as Introduction } from "@/components/component/initial-hero";
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
import { ProductSection } from "@/components/Sections/ProductSection";

export default async function Home() {
  return (
    <>
      <Up>
        <ChatLayout>
          <ChatButton />
        </ChatLayout>
        <Header />
        <Introduction />
        <HighlighHero />
        <ProductSection />
        <Counpon />
        <TestimonialsCard />
        <LocationHero />
        <Social />
        <Acess />
        <Payment />
        <InitialFooter />
      </Up>
    </>
  );
}
