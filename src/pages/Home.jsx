import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import Lottery from '../components/Lottery.jsx'
import Staking from '../components/Staking.jsx'
import Coins from '../components/Coins.jsx'
import Newblock from '../components/Newblock.jsx'
import Card from '../components/Cards.jsx'
import Cta from '../components/Cta.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
	return (
		<div>
			<Navbar/>
			<Hero/>
			<Lottery/>
			<Staking/>
			<Coins/>
			<Newblock/>
			<Card />
			<Cta />
			<Footer />
			
			
		</div>
	)
}

export default Home