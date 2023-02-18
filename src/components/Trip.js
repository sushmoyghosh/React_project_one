import "./Trip.css";
import TripData from "./TripData";
import TripImg from "../assets/travel (6).jpg";
import TripImg1 from "../assets/travel (2).jpg";
import TripImg2 from "../assets/travel (7).jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips</h1>
      <p>You can discover unique destinations using google maps.</p>

      <div className="tripcard">
        <TripData
          image={TripImg}
          heading="Trip in Maldives"
          text="It is not cheap or easy to reach, but this isolated paradise between the Arabian and Laccadive seas is the personification of a dreamy tropical vacation. In this South Asian destination, which is made up of more than 1,000 islands, thatched-roof bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere. Fill your days with beach trips, spa treatments and snorkeling or scuba diving excursions. If cabin fever sets in, pay a visit to the capital, Malé, where you'll find historic mosques and open-air markets"
        />
        <TripData
          image={TripImg2}
          heading="Trip in London"
          text="London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, plan to see the top spots, such as the Tower of London, the Tate Modern art institution, Buckingham Palace, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of year"
        />
        <TripData
          image={TripImg1}
          heading="Trip in Paris"
          text="The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi. Get lost wandering along the charming cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours. If you're up for a quick daytrip, head about 15 miles southwest of the city center to the Palace of Versailles, which offers guided and self-guided tours of the estate."
        />
      </div>
    </div>
  );
}
export default Trip;
