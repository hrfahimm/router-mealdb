import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import Error from "./components/Error/Error";
import SingleMeal from "./components/SingleMeal/SingleMeal";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />}></Route>
					<Route path="/meals" element={<Meals></Meals>}></Route>
					<Route path="/meal/:idmeal" element={<SingleMeal />}></Route>
					<Route path="*" element={<Error></Error>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
