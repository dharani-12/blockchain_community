import React from 'react'
import { Button } from "@mui/material";

import Bitcoin from '../assets/Bitcoin-1.png'
import Shield from '../assets/shield.png'
import Etherium from '../assets/Etherium-2.png'
import Monero from '../assets/Monero-2.png'
import Suitcase from '../assets/suitcase.png'

function Cta() {
  return (
    <section className="cta-section">

      {/* FLOATING ICONS */}

      <img
        src={Bitcoin}
        alt="bitcoin"
        className="floating-icon bitcoin-icon"
      />

      <img
        src={Etherium}
        alt="ethereum"
        className="floating-icon ethereum-icon"
      />

      <img
        src={Shield}
        alt="shield"
        className="floating-icon shield-icon"
      />

      <img
        src={Suitcase}
        alt="suitcase"
        className="floating-icon suitcase-icon"
      />

      <img
        src={Monero}
        alt="Monero"
        className="floating-icon crypto-icon"
      />

      {/* CONTENT */}

      <div className="container">

        <div className="cta-content">

          <h2>
            Join our vibrant community of crypto enthusiasts,
            investors, and innovators.
          </h2>

            <Button
                variant="contained"
                className="cta-btn"
            >
                Call To Action
            </Button>

        </div>

      </div>

    </section>
  );
}

export default Cta