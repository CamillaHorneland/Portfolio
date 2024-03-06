import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import ImageBack from "../../constant/Backgound";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <header className="z-30">
        <Nav />
      </header>

      <main className="flex-grow">
        <ImageBack big={true} /> 
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <Outlet />
        </div>
      </main>

      <footer className="z-30 mt-20">
        <Footer />
      </footer>
    </div>
  );
}




