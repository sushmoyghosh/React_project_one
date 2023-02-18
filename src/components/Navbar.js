// link file
import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./menuItems";
import { Link } from "react-router-dom";
// import { MenuItems } from "./MenuItems";

// navbar create

class Navbar extends Component {
  // Set state
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbarlogo">Tripy</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button>sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
