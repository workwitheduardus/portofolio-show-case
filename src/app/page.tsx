"use client"
import Navbar from "./home/partials/Navbar";
import Hero from "./home/partials/Hero";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}