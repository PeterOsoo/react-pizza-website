import React from "react"
import "./App.css"

import Hero from "./components/Hero"
import Products from "./components/Products"
import { productData } from "./components/Products/data"

import { GlobalStyle } from "./globalStyles"

const App = () => {
	return (
		<>
			<GlobalStyle />

			<Hero />
			<Products heading="Choose your favorite" data={productData} />
		</>
	)
}

export default App
