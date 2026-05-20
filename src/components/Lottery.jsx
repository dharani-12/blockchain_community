import React from 'react'
import { Button, Card, CardContent } from "@mui/material";
import logo from "../assets/Group 2.svg";

const lotteryData = [
  {
    id: 1,
    title: "Every Month",
    prize: "103,000,000BTC",
    nft: "5/10",
  },
  {
    id: 2,
    title: "Every Month",
    prize: "103,000,000BTC",
    nft: "6/10",
  },
  {
    id: 3,
    title: "Every Month",
    prize: "103,000,000BTC",
    nft: "3/10",
  },
];


function Lottery() {
  return (
    <section className="lottery-section mx-4 pb-4">
      <div className="container-fluid">

        {/* SECTION TITLE */}
        <div className="lottery-heading">
          <h2>Lottery</h2>

          <p>
            Experience the thrill of winning crypto prizes with our
            cutting-edge lottery platform. Participate in our transparent
            and provably fair crypto lotteries.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4">

          {lotteryData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>

              <Card className="lottery-card">

                <CardContent className="lottery-card-content">

                  {/* TOP */}
                  <div className="lottery-top d-flex justify-content-between align-items-center">
                        <img
                        src={logo}
                        alt="logo"
                        className="lottery-logo"
                        />

                        <div className= "d-flex flex-column justify-content-center align-items-center nft-wrapper">

                          <div className="nft-circle">
                            <span>{item.nft}</span>
                          </div>

                          <p>NFTs remaining</p>

                        </div>
   
                  </div>

                  {/* CENTER */}
                  <div className="lottery-center">

                    <h5>{item.title}</h5>

                    <h3>{item.prize}</h3>

                    {/* TIMER */}
                    <div className="timer-wrapper">

                      <div className="timer-item">

                        <small>Hour</small>
                        <div className="timer-box">24</div>

                      </div>

                      <div className="timer-dots">:</div>

                      <div className="timer-item">

                        <small>Min</small>
                        <div className="timer-box">35</div>
                      </div>

                      <div className="timer-dots">:</div>

                      <div className="timer-item">
						
                        <small>Sec</small>
                        <div className="timer-box">10</div>
                      </div>

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="lottery-buttons">

                    <Button
                      variant="contained"
                      className="prize-btn"
                    >
                      Prizes
                    </Button>

                    <Button
                      variant="contained"
                      className="buy-btn"
                    >
                      Buy Now
                    </Button>

                  </div>

                </CardContent>

              </Card>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Lottery;