import Banner from "@/components/BannerHome/page";
import AboutSection from "@/components/AboutSec";
import PortfolioSection from "@/components/PortfolioSec";
import ServiceSection from "@/components/ServiceSec";

export default function Main() {
  return (
    <main className="">
     <Banner/>
     <AboutSection/>
     <PortfolioSection/>
     <ServiceSection/>
    </main>
  );
}
