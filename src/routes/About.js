import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/travel (2).jpg";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="know About Ours Journey"
        text="Choose Your Favourite Destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default About;
