import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import ContactMe from "./components/ContactMe.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center  ">
        <div className="mx-10  w-[90vw] sm:w-[65vw] md:w-[750px]">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
