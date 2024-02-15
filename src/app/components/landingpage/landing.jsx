import React from "react";
import styles from "./landing.module.css";
import About from "../aboutSection/about";
import Event from "../eventSection/event";
import Team from "../teamSection/team";


const Landing = () => {
  return (
    <div className={styles.container}>
      Landing

      <div>
        <About/>
      </div>

      <div>
        <Event/>
      </div>

      <div>
        <Team/>
      </div>

    </div>
  );
};

export default Landing;
