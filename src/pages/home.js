import AboutSection from "../components/about";
import ContactSec from "../components/contact";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/navbar";
import PortoSection from "../components/portoSection";
import Services from "../components/services";

const Home = () => {
  
  return (
    <>
    <Navbar />
    <HomeSection />
    <PortoSection />
    <AboutSection />
    <Services />
    <ContactSec />
    </>
  );
};

export default Home;
