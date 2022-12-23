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

  useEffect(() => {
    setDimensions({
      height: screen.height,
      width: screen.width,
    });

    function handleResize() {
      setDimensions({
        height: screen.height,
        width: screen.width,
      });
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
        <header
          className={`sticky top-0 z-50 bg-white w-full min-w-max h-full`}
        >
          <Header scrolled={scrolled} />
        </header>
      ) : (
        <Sidebar />
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
