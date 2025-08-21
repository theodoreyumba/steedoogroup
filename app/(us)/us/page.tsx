import { HeroSection } from '@/components/sections/hero';
import { WhoWeAreSection } from '@/components/sections/who-we-are';
import { SectorsSection } from '@/components/sections/sectors';
import { OurServicesSection } from '@/components/sections/our-services';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';

export default function USHomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <SectorsSection />
      <OurServicesSection />
      <WhyChooseUsSection />
    </>
  );
}