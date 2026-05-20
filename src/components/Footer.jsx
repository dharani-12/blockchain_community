import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import logo from "../assets/Group 2.svg";
import frameBg from "../assets/Frame.png";

function Footer() {
    return (
        <footer className="footer-section px-4"
            style={{
                backgroundImage: `url(${frameBg})`
            }}
        >

            <div className="container-fluid">

                <div className="footer-top">

                    <img
                        src={logo}
                        alt="Alihassan"
                        className="footer-logo"
                    />

                </div>

                <div className="row gy-5">

                    {/* LEFT */}
                    <div className="col-lg-5">

                        <div className="footer-left">

                            {/* ADDRESS */}
                            <div className="footer-block">

                                <h4>Business Address</h4>

                                <p>
                                1590 Peyton Radial,1590 Peyton Radial,
                                Oregon, 47173
                                </p>

                            </div>

                            {/* EMAIL */}
                            <div className="footer-block">

                                <h4>Email</h4>

                                <p>hello@beechain.io</p>

                                <p>contact@blockchain.io</p>

                            </div>

                            {/* COPYRIGHT */}
                            <span className="copyright">
                                © 2024 alihassanux, All Rights Reserved
                            </span>

                        </div>

                    </div>

                    {/* CENTER */}
                    <div className="col-lg-3">

                        <div className="footer-links">

                            <h4>Docs</h4>

                            <ul>

                                <li>FAQs</li>

                                <li>White paper</li>

                                <li>Rewards</li>

                            </ul>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-4">

                        <div className="newsletter-section">

                            <h4>News Letter</h4>

                            <p>
                                Blockchain, the world’s leading bitcoin operator,
                                makes it so flippin’ easy to buy and sell bitcoin
                                via cash, card, or bank transfer.
                            </p>

                            <p>
                                Sign up to get the latest in Bee chain news,
                                discounts, and more.
                            </p>

                            {/* INPUT */}
                            <div className="newsletter-input">

                                <input
                                type="email"
                                placeholder="Email Address"
                                />

                                <button>

                                    <ArrowForwardIcon />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer