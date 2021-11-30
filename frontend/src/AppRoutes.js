import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Header from './components/Header'
import ProductPage from "./pages/ProductPage";

function appRoutes() {
	return (


		<BrowserRouter>
				<Header/>
			<Routes>
		        <Route path="/" element={<Home></Home>}></Route>
                <Route path="/shop" element={<AllProducts></AllProducts>}></Route>
                <Route path="/product/:name/:id" element={<ProductPage></ProductPage>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default appRoutes;
