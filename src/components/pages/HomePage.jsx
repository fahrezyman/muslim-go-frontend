// src/components/Home.jsx
import Navbar from "../molecules/Navbar";
import HeroImage from "../../assets/hero-image.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-10 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Welcome to MuslimGO
          </h1>
          <p className="text-lg text-black mb-8">
            Discover the beauty of the Quran with us.
          </p>
          <Link
            to="/quran"
            className="block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-center no-underline"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-center items-center h-screen">
          <img src={HeroImage} alt="Hero Image" className="w-full" />
        </div>
      </div>
      {/* Gambar di atas teks untuk tampilan mobile */}
      <div className="md:hidden flex justify-center items-center">
        <img src={HeroImage} alt="Hero Image" className="w-full" />
      </div>
    </div>
  );
};

export default HomePage;
