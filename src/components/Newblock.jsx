import React from 'react'
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Dao from '../assets/Dao.svg'
import Rocket from '../assets/Rocket.svg'
import Learn from '../assets/Learn.svg'
import Seed from '../assets/Seed.svg'


function Newblock() {
  return (
    <>
		<section className="staking-section mx-4">

			<div className="container-fluid">

				<div className="row align-items-center flex-lg-row-reverse">

					{/* LEFT IMAGE */}
					<div className="col-lg-6">
						<div className="staking-image-wrapper">

							<img
								src={Dao}
								alt="dao"
								className="img-fluid staking-image"
							/>

						</div>
					</div>

					{/* RIGHT CONTENT */}
					<div className="col-lg-6">

						<div className="staking-content">

							<h2>DAO</h2>

							<p>
								Join our decentralized community and take part in shaping the future of our project.
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

		<section className="staking-section mx-4">

			<div className="container-fluid">

				<div className="row align-items-center ">

					{/* LEFT IMAGE */}
					<div className="col-lg-6">
						<div className="staking-image-wrapper">

							<img
								src={Rocket}
								alt="Rocket"
								className="img-fluid staking-image"
							/>

						</div>
					</div>

					{/* RIGHT CONTENT */}
					<div className="col-lg-6">

						<div className="staking-content">

							<h2>Launchpad</h2>

							<p>
								Discover the next big thing in the blockchain world through our exclusive launchpad platform. 
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

		<section className="staking-section mx-4">

			<div className="container-fluid">

				<div className="row align-items-center flex-lg-row-reverse">

					{/* LEFT IMAGE */}
					<div className="col-lg-6">
						<div className="staking-image-wrapper">

							<img
								src={Learn}
								alt="learn"
								className="img-fluid staking-image"
							/>

						</div>
					</div>

					{/* RIGHT CONTENT */}
					<div className="col-lg-6">

						<div className="staking-content">

							<h2>Learn to Earn</h2>

							<p>
								Unleash your potential in the crypto space with our Learn to Earn program. 
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

		<section className="staking-section mx-4 my-5">

			<div className="container-fluid">

				<div className="row align-items-center">

					{/* LEFT IMAGE */}
					<div className="col-lg-6">
						<div className="staking-image-wrapper">

							<img
								src={Seed}
								alt="seed"
								className="img-fluid staking-image"
							/>

						</div>
					</div>

					{/* RIGHT CONTENT */}
					<div className="col-lg-6">

						<div className="staking-content">

							<h2>Seed Funding</h2>

							<p>
								Are you a promising blockchain project in need of seed funding? Look no further.
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
		
    </>
  )
}

export default Newblock