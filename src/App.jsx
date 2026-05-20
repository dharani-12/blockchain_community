import { Routes, Route } from "react-router-dom"

import './App.css'
import Home from './pages/Home'
import Launchpage from "./pages/Launchpage"

function App() {

  return (

    <Routes>

		<Route path="/" element={<Home />} />

		<Route
			path="/launch"
			element={<Launchpage />}
      	/>
    </Routes>
  )
}

export default App
