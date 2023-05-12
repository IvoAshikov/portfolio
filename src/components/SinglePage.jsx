import { useEffect, useState } from "react";
import Loader from "./Loader";
import NavBar from "./NavBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MyWorkSection from "./MyWorkSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import "../components-css/SinglePage.css";
import TechStackSection from "./TechStackSection";

function SinglePage() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLightModeActive, setIsLightModeActive] = useState(false);
  const [isMobileBurgerActive, setIsMobileBurgerActive] = useState(false);

  useEffect(() => {
    if (isMobileBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileBurgerActive]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setCurrentPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [currentPosition]);

  return (
    <div className="single-page">
      {loading && (
        <div className="preloader">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="main-content">
          <>
            {window.innerWidth <= 1024 && <MobileNavBar menuActive={isMobileBurgerActive} setMenuActive={setIsMobileBurgerActive} mode={isLightModeActive} />}
            {window.innerWidth > 1024 && (
              <>
                <NavBar position={currentPosition} mode={isLightModeActive} setMode={setIsLightModeActive} />
                <LeftSidebar position={currentPosition} />
                <RightSidebar position={currentPosition} mode={isLightModeActive} setMode={setIsLightModeActive} />
              </>
            )}
            <div className={`${isMobileBurgerActive ? "blur" : ""}`}>
              <HeroSection mode={isLightModeActive} />
              <AboutSection />
              <TechStackSection />
              <MyWorkSection />
              <ContactForm />
              <Footer />
            </div>
          </>
        </div>
      )}
    </div>
  );
}

export default SinglePage;
