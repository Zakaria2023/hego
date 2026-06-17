import HomeCtaBanner from "./home/home-cta-banner";
import HomeProductsSection from "./home/home-products-section";
import IndustriesSection from "./home/industries-section";
import ProcessSection from "./home/process-section";
import WhyChooseUsSection from "./home/why-choose-us-section";

const HomeSections = () => (
  <>
    <HomeProductsSection />
    <WhyChooseUsSection />
    <IndustriesSection />
    <ProcessSection />
    <HomeCtaBanner />
  </>
);

export default HomeSections;
