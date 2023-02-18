import destinationImg from "../assets/travel (1).jpg";
import destinationImg1 from "../assets/travel (2).jpg";
import destinationImg2 from "../assets/travel (3).jpg";
import destinationImg3 from "../assets/travel (4).jpg";
import "./destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to finds our trueself</p>

      <DestinationData
        className="first-des"
        desHeading="New Zealand"
        desText=" New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers), sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealand's most accessible glaciers – Franz Josef and Fox Glacier – on the island's west coast."
        img1={destinationImg}
        img2={destinationImg1}
      />
      <DestinationData
        className="first-des-rev"
        desHeading="Turks & Caicos"
        desText=" Located north of the Dominican Republic, this collection of roughly 100 islands and cays is popular with honeymooners – and for good reason. With sparkling white sand, crystal-clear water and nearly 350 miles of colorful coral reef, the Turks and Caicos Islands are truly a sight to behold. While you'd be remiss to visit the islands and not spend a day or two lounging on Grace Bay Beach, those seeking a more active getaway will have plenty of opportunities to snorkel, scuba dive and ride horses along the coast."
        img1={destinationImg3}
        img2={destinationImg2}
      />
    </div>
  );
};

export default Destination;
