import AboutSection from "@/components/AboutSec";
import Banner from "@/components/BannerHome/page";
import PortfolioSection from "@/components/PortfolioSec";
import ServiceSection from "@/components/ServiceSec";

export default function Home(){
    return(
        <>
        <Banner/>
        <AboutSection/>
        <PortfolioSection/>
        <ServiceSection/>
        </>
    )
}