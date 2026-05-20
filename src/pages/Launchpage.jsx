import React, { useState } from 'react';
import './LaunchPage.css';
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";


const dropdownMenuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#120a2b",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "16px",
      color: "white",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      "& .MuiMenuItem-root": {
        padding: "12px 16px",
        "&:hover": {
          backgroundColor: "rgba(223, 120, 115, 0.15)",
        },
        "&.Mui-selected": {
          backgroundColor: "#df7873",
          color: "#24124a",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#ea8b85",
          }
        },
      },
    },
  },
};

function Launchpage() {

    const [country, setCountry] = useState('');
    const [blockchain, setBlockchain] = useState("");
    const [currency, setCurrency] = useState("");
    const navigate = useNavigate();

  return (
    <section className="launch-page">
      <div className="container">
        <div className="launch-wrapper">
          
          <button className="back-btn" onClick={() => navigate("/")}>
            <ArrowBackIcon />
            Back To Home
          </button>

          {/* TITLE */}
          <Typography variant="h3" className="launch-title">
            Create Crypto Account
          </Typography>

          <Typography className="launch-subtitle">
            Join the future of blockchain technology
          </Typography>

          {/* FORM WITH BOOTSTRAP GRID */}
          <form className="launch-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row g-4">
              
              {/* Name & Username */}
              <div className="col-12 col-md-6">
                <TextField label="Full Name" variant="outlined" fullWidth />
              </div>
              <div className="col-12 col-md-6">
                <TextField label="Username" variant="outlined" fullWidth />
              </div>

              {/* Email & Phone */}
              <div className="col-12 col-md-6">
                <TextField label="Email Address" type="email" variant="outlined" fullWidth />
              </div>
              <div className="col-12 col-md-6">
                <TextField label="Phone Number" type="tel" variant="outlined" fullWidth />
              </div>

              {/* Country & Date of Birth */}
              <div className="col-12 col-md-6">
                <TextField 
                    select 
                    label="Country" 
                    fullWidth
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}

                    slotProps={{
                        select: {  MenuProps: dropdownMenuProps, },
                    }}
                >
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                </TextField>
              </div>

              <div className="col-12 col-md-6">
                <TextField
                    label="Date of Birth"
                    type="date"
                    fullWidth
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                  className="date-picker-field"
                />
              </div>

              {/* Wallet Address (Full Width) */}
              <div className="col-12">
                <TextField
                    label="Wallet Address"
                    variant="outlined"
                    fullWidth
                    slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">

                                <AccountBalanceWalletIcon sx={{ color: "#9d9db5" }} />
                            </InputAdornment>
                            ),
                        },
                    }}
                />
              </div>

              {/* Blockchain & Currency */}
              <div className="col-12 col-md-6">
                <TextField 
                    select 
                    label="Preferred Blockchain" 
                    fullWidth
                    value={blockchain}
                    onChange={(e) => setBlockchain(e.target.value)}
                    slotProps={{
                        select: {  MenuProps: dropdownMenuProps, },
                    }}
                >
                  <MenuItem value="Ethereum">Ethereum</MenuItem>
                  <MenuItem value="BNB Chain">BNB Chain</MenuItem>
                  <MenuItem value="Polygon">Polygon</MenuItem>
                  <MenuItem value="Solana">Solana</MenuItem>
                </TextField>
              </div>

              <div className="col-12 col-md-6">
                <TextField 
                    select 
                    label="Preferred Currency" 
                    fullWidth
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    slotProps={{
                        select: {  MenuProps: dropdownMenuProps, },
                    }}
                >
                  <MenuItem value="BTC">Bitcoin (BTC)</MenuItem>
                  <MenuItem value="ETH">Ethereum (ETH)</MenuItem>
                  <MenuItem value="USDT">Tether (USDT)</MenuItem>
                  <MenuItem value="BNB">Binance Coin (BNB)</MenuItem>
                </TextField>
              </div>

              {/* Passwords */}
              <div className="col-12 col-md-6">
                <TextField label="Password" type="password" variant="outlined" fullWidth />
              </div>
              <div className="col-12 col-md-6">
                <TextField label="Confirm Password" type="password" variant="outlined" fullWidth />
              </div>

              {/* Referral (Full Width) */}
              <div className="col-12">
                <TextField label="Referral Code (Optional)" variant="outlined" fullWidth />
              </div>

              {/* Terms Checkbox */}
              <div className="col-12">
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#8f8ca5",
                        "&.Mui-checked": { color: "#df7873" },
                      }}
                    />
                  }
                  label="I agree to the Terms & Conditions"
                  className="terms-checkbox"
                />
              </div>

              {/* Buttons */}
              <div className="col-12">
                <div className="launch-buttons">
                  <Button variant="contained" fullWidth className="register-btn">
                    Register Account
                  </Button>
                  <Button variant="outlined" fullWidth className="wallet-btn">
                    Connect Wallet
                  </Button>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Launchpage;