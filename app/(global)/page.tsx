import { HeroSection } from '@/components/sections/hero';
import { WhoWeAreSection } from '@/components/sections/who-we-are';
import { OurCompaniesSection } from '@/components/sections/our-companies';
import { SectorsSection } from '@/components/sections/sectors';
import { OurServicesSection } from '@/components/sections/our-services';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <OurCompaniesSection />
      <SectorsSection />
      <OurServicesSection />
      <WhyChooseUsSection />
    </>
  );
}