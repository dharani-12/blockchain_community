import React from 'react'
import hero from '../assets/hero.svg'
import bgBlend from '../assets/Frame.svg'
import { Button } from "@mui/material";

function Hero() {
  return (
    <section className="hero-section px-4"
		style={{
			backgroundImage: `url(${bgBlend})`
		}}
    >


      <div className="container-fluid">
        <div className="row align-items-center ">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="hero-content">

              <h1 className="hero-title">
                Embrace the
                <br />
                Crypto Revolution
              </h1>

              <p className="hero-text">
                Power your Future with Blockchain
              </p>

              <Button
                variant="contained"
                className="hero-btn"
              >
                Learn More
              </Button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper text-center">
              <img
                src={hero}
                alt="Blockchain"
                className="img-fluid hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero