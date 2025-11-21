import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CoursesCarousel from "./components/CoursesCarousel";
import TrustedCompanies from "./components/TrustedCompanies";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <CoursesCarousel />
      <TrustedCompanies />
    </>
  );
}
