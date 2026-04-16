

import { Guitar, Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <>
  <div className="hero min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">

    <div className="hero-content flex-col lg:flex-row-reverse gap-10">

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
        className="max-w-sm md:max-w-md rounded-3xl shadow-2xl transition duration-700 hover:scale-105 hover:rotate-1"
        alt="Guitar shop"
      />

      {/* CONTENT */}
      <div className="text-center lg:text-left animate-fade-in">

        {/* Badge */}
      <div className="flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-500/30 w-fit">
  <Guitar className="w-4 h-4" />
  Premium Guitar Store
</div>
        <h1 className="text-5xl font-bold leading-tight text-white">
          Find Your Perfect <span className="text-cyan-400">Sound</span>
        </h1>

        <p className="py-6 text-gray-300 max-w-lg">
          Discover premium electric, acoustic, and classical guitars from top brands.
          Built for beginners, professionals, and music lovers who want true tone quality.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="./products" className="btn btn-primary">
            Shop Now
          </Link>
          <button className="btn btn-outline btn-info">
            Explore Collection
          </button>
        </div>

        {/* STATS */}
        <div className="flex gap-8 mt-8 text-gray-400 text-center lg:text-left">

          <div>
            <p className="text-2xl font-bold text-cyan-400">1K+</p>
            <p className="text-sm">Guitars</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-cyan-400">500+</p>
            <p className="text-sm">Artists</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-cyan-400">24/7</p>
            <p className="text-sm">Support</p>
          </div>

        </div>

      </div>
    </div>
  </div>
</>
   
  );
}
