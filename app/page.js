import Image from "next/image";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Explore from "./components/Explore";
import AboutUs from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="relative">
<div className="fixed bottom-0 left-0 right-0 z-30">
<WhatsAppButton phoneNumber={971502050089} message="Hello Oia"/>

</div>
      <Header/>

      <Slider/>
      <AboutUs/>
      <Testimonials/>
      <ContactForm/>
    </main>
  );
}
