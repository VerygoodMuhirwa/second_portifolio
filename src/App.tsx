import React from "react";
import { FooterComponent } from "./components/FooterComponent";
import { NavComponent } from "./components/NavComponent";
import { AboutMePage } from "./pages/AboutMePage";

// Assets
import { HomePage } from "./pages/HomePage";
import { ThingsBuilted } from "./pages/ThingsBuiltedPage";

// CSS
import "./style/app.scss";

function App() {
  return (
    <div>
      <div className="App">
        <header>
          <NavComponent />
        </header>

        <section className="first_section">
          <HomePage />
        </section>
        <section className="second_section">
          <AboutMePage />
        </section>
        <section className="third_section">
          <ThingsBuilted />
        </section>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
