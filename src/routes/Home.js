import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />

      <Footer />
    </>
  );
}
export default Home;
