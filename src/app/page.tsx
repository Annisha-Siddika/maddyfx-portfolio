import Banner from "@/components/BannerHome/page";
import AboutSection from "@/components/AboutSec";
import PortfolioSection from "@/components/PortfolioSec";
import ServiceSection from "@/components/ServiceSec";
import TestimonialSection from "@/components/TestimonialSec";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/contex/active-section-context";

export default function Main() {
  return (
    <main className="">
      <ActiveSectionContextProvider>
        <header className="fixed top-0 w-full left-0 z-40">
          <Header />
        </header>
        <div className="min-h-screen bg-slate-950 w-full  text-slate-300 ">
          <Banner />
          <AboutSection />
          <PortfolioSection />
          <ServiceSection />
          <TestimonialSection />
        </div>
        <footer>
          <Footer />
        </footer>
      </ActiveSectionContextProvider>

    </main>
  );
}
