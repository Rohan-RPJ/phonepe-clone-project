import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import MainContent from "./../components/MainContent";
import Footer from "./../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
  });

  function handleResize() {
    setDimensions({
      height: screen.height,
      width: screen.width,
    });
  }

  useEffect(() => {
    setDimensions({
      height: screen.height,
      width: screen.width,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = handleScroll;
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) setScrolled(true);
    else setScrolled(false);
  };

  return (
    <div className={`w-full h-full`}>
      {/* Header for Large Screens | Sidebar for small mobile screens */}
      {dimensions.width > 622 ? (
        <Header scrolled={scrolled} mobileNav={false} />
      ) : (
        <Sidebar scrolled={scrolled} mobileNav={true} />
      )}
      {/* <Sidebar /> */}

      <div className={`w-full h-full overflow-scroll scrollbar-hide`}>
        {/* Main Content */}
        <main className={`w-full h-full`}>
          <MainContent />
        </main>

        {/* Footer */}
        <footer className={`w-full h-full`}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
