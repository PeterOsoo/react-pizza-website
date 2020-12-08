import React from "react"
import "./App.css"

import Hero from "./components/Hero"

import { GlobalStyle } from "./globalStyles"

const App = () => {
	return (
		<>
			<GlobalStyle />

			<Hero />
		</>
	)
}

export default App
