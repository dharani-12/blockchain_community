import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'

function FeatureCard({ icon, title, description, buttonText }) {

    return (
        <div className="feature-card ">

            {/* ICON */}
            <div className="feature-icon-wrapper">

                <img
                src={icon}
                alt={title}
                className="feature-icon"
                />

            </div>

            {/* CONTENT */}
            <div className="feature-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <button className="feature-btn">

                {buttonText}

                <ArrowForwardIcon className="arrow-icon" />

                </button>

            </div>

        </div>
    );
}

function Card() {
  return (
    <section className="feature-cards-section">
      <div className="container">

        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-lg-4 col-md-6">

            <FeatureCard
              icon={c1}
              title="Buy your lucky block NFT"
              description="Join our decentralized community and take part in shaping the future of our project. As a member of our DAO"
              buttonText="View Competitions"
            />

          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 col-md-6">

            <FeatureCard
              icon={c2}
              title="Earn crypto rewards"
              description="Join our decentralized community and take part in shaping the future of our project. As a member of our DAO"
              buttonText="View All"
            />

          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 col-md-6">

            <FeatureCard
              icon={c3}
              title="Win prizes"
              description="Join our decentralized community and take part in shaping the future of our project. As a member of our DAO"
              buttonText="View All"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Card;