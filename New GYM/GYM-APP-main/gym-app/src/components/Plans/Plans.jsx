import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="plans-container" id="Plans">
      <div className="plans-blur-1 blur"></div>
      <div className="plans-blur-2 blur"></div>
      <div className="programs-headers" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card///////////////////// */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i + 1}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span >{features}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more Benefits - </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
