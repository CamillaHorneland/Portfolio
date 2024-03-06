import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import ImageBack from "../../constant/Backgound";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>

      <main >
        <ImageBack big={true} /> 
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-20">
            <Outlet />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
