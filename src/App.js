import React from "react"
import "./App.css"

import Navbar from "./components/Navbar/Navbar"
import { GlobalStyle } from "./globalStyles"

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
		</>
	)
}

export default App
