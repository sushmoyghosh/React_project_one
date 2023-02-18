import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/travel (4).jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Here is our Services"
        text="Choose Your Favourite Destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
