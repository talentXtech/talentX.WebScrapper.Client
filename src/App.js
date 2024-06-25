import "./App.css";
import { useState } from "react";
import Allabolag from "./components/Allabolag/Allabolag";
import LayOff from "./components/Layoff/LayOff";
import Sifted from "./components/Sifted/Sifted";
import logo from "../src/images/talentXlogofinal.png";

function App() {
  const listOfSections = ["allabolag", "layoff", "sifted"];
  const [section, setSection] = useState(listOfSections[0]);

  const renderComponent = () => {
    switch (section) {
      case listOfSections[0]:
        return <Allabolag />;
      case listOfSections[1]:
        return <LayOff />;
      case listOfSections[2]:
        return <Sifted />;
      default:
        return <h1>Network Issue ... Please try again later</h1>;
    }
  };

  return (
    <>
      <nav className="laptopNavBar">
        <div className="container">
          <img src={logo} alt="" />
          <ul className="leadtext">
            <li
              className={section === listOfSections[0] ? "nav-item-active" :"nav-item" }
              onClick={() => setSection(listOfSections[0])}
            >
              Allabolag
            </li>
            <li
              className={section === listOfSections[1] ? "nav-item-active" :"nav-item" }
              onClick={() => setSection(listOfSections[1])}
            >
              Layoff
            </li>
            <li
            className={section === listOfSections[2] ? "nav-item-active" :"nav-item" }
              onClick={() => setSection(listOfSections[2])}
            >
              Sifted
            </li>
          </ul>
        </div>
      </nav>
      <div className="componentcontainer">
      {renderComponent()}
      </div>
    </>
  );
}

export default App;
