import React from 'react'

import abbc from "../assets/icons/abbc.png";
import xpa from "../assets/icons/xpa.png";
import amber from "../assets/icons/amber.png";
import busd from "../assets/icons/busd.png";
import bitcoin from "../assets/icons/bitcoin.png";
import etherium from "../assets/icons/etherium.png";
import blockport from "../assets/icons/blockport.png";
import bibox from "../assets/icons/bibox.png";
import bluzelle from "../assets/icons/bluzelle.png";
import kucoin from "../assets/icons/kucoin.png";
import trx from "../assets/icons/trx.png";
import allspoons from "../assets/icons/allspoons.png";


const topCoins = [
	  {
    id: 1,
    name: "ABBC",
    icon: abbc,
	
  },
  {
    id: 2,
    name: "XPA",
    icon: xpa,
  },
  {
    id: 3,
    name: "Amber",
    icon: amber,
  },
  {
    id: 4,
    name: "Binace BUSD",
    icon: busd,
  },
  {
    id: 5,
    name: "Etherium",
    icon: etherium,
  },
    {
    id: 6,
    name: "Bitcoin",
    icon: bitcoin,
  },

];

const bottomCoins = [

  {
    id: 7,
    name: "Blockport",
    icon: blockport,
  },
  {
    id: 8,
    name: "Bibox",
    icon: bibox,
  },
  {
    id: 9,
    name: "Bluzelle",
    icon: bluzelle,
  },
  {
    id: 10,
    name: "KUCOIN",
    icon: kucoin,
  },
  {
    id: 11,
    name: "TRX",
    icon: trx,
  },
  {
    id: 12,
    name: "All Spoons",
    icon: allspoons,
  },
];

function Coins() {
  return  (
    <section className="coins-section">

		{/* TOP ROW */}
    	<div className="coins-row left-scroll">

			{[...topCoins, ...topCoins].map((coin, index) => (
			<div className="coin-card" key={index}>

				<img
				src={coin.icon}
				alt={coin.name}
				className="coin-icon"
				/>

				<span>{coin.name}</span>

			</div>
			))}

		</div>

		{/* BOTTOM ROW */}
		<div className="coins-row right-scroll">

			{[...bottomCoins, ...bottomCoins].map((coin, index) => (
			<div className="coin-card" key={index}>

				<img
				src={coin.icon}
				alt={coin.name}
				className="coin-icon"
				/>

				<span>{coin.name}</span>

			</div>
			))}

		</div>

    </section>
  );
}

export default Coins