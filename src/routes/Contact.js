import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/travel (3).jpg";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
