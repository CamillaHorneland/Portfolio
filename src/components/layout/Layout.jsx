import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";


export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}