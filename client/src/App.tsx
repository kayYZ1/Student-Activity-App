import { Routes, Route } from "react-router-dom"

import ViewEvents from './pages/ViewEvents'
import NewEvent from './pages/NewEvent'
import MarkedEvents from './pages/MarkedEvents'

import Layout from "./layouts/Layout"

const App = () => {
  return (
	<Layout>
		<Routes>
			<Route path="/" element= {<ViewEvents/>} />
			<Route path="/newEvent" element= {<NewEvent/>} />
			<Route path="/markedEvents" element= {<MarkedEvents />} />
		</Routes>
	</Layout>
  )
}

export default App