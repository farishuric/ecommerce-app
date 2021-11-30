import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";

function AllProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get("/api/products-data").then((res) => {
			setProducts(res.data);
		});
	}, []);

	return (
		<div id="shop">
			<div className="product-cards-row">
				{products.map((data) => {
					return (
						<ProductCard
							image={data.productImageUrl}
							name={data.productName}
							price={data.productPrice}
						></ProductCard>
					);
				})}
			</div>
		</div>
	);
}

export default AllProducts;
