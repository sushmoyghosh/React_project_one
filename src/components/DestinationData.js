import { Component } from "react";
import destinationImg from "../assets/travel (1).jpg";
import destinationImg1 from "../assets/travel (2).jpg";
import destinationImg2 from "../assets/travel (3).jpg";
import destinationImg3 from "../assets/travel (4).jpg";
import "./destination.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.desHeading}</h2>
          <p>{this.props.desText}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img1" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
