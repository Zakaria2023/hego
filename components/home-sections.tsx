import HomeCtaBanner from "./home/home-cta-banner";
import HomeProductsSection from "./home/home-products-section";
import IndustriesSection from "./home/industries-section";
import ProcessSection from "./home/process-section";
import WhyChooseUsSection from "./home/why-choose-us-section";

const HomeSections = () => (
  <>
    <div className="[content-visibility:auto] [contain-intrinsic-size:1200px]">
      <HomeProductsSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:1100px]">
      <WhyChooseUsSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:900px]">
      <IndustriesSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:950px]">
      <ProcessSection />
    </div>
    <div className="[content-visibility:auto] [contain-intrinsic-size:800px]">
      <HomeCtaBanner />
    </div>
  </>
);

export default HomeSections;
