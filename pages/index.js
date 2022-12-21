import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import MainContent from "./../components/MainContent";
import Footer from "./../components/Footer";

const Home = () => {
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
      {/* Header */}
      <header className={`fixed top-0 z-50 bg-white w-full`}>
        <Header scrolled={scrolled} />
      </header>

      <div className={`mt-[76px] w-full`}>
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
