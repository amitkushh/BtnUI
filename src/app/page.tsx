import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-15 md:mx-24 lg:mx-32 2xl:mx-60">
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}
