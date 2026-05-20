import React from 'react'
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import stakingImage from "../assets/staking.svg";

function Staking() {
  return (
    <section className="staking-section mx-4">
      <div className="container-fluid">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="staking-image-wrapper">

              <img
                src={stakingImage}
                alt="staking"
                className="img-fluid staking-image"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <div className="staking-content">

              <h2>Staking</h2>

              <p>
                Maximize the potential of your cryptocurrencies by
                staking them on our secure and reliable platform.
              </p>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                className="staking-btn"
              >
                Learn more
              </Button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Staking;