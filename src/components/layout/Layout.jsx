import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Background from "../../assets/BackgroundCircle.png";

export default function Layout() {
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const updateMinHeight = () => {
      const contentHeight = document.body.scrollHeight;
      setMinHeight(contentHeight);
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);

    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="z-30">
        <Nav />
      </header>

      <main className="flex-grow relative">
        <div
          className=" bg-cover bg-center p-10"
          style={{
            backgroundImage: `url(${Background})`,
            
          }}
        >
          <div className="container  px-4">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="z-30 relative">
        <Footer />
      </footer>
    </div>
  );
}















