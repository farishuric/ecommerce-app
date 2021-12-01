import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import backgroundImage from "../assets/media/heading.jpg";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get("/api/products-data");
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div id="shop">
            <div
                className="page-header"
                style={{
                    backgroundImage: `radial-gradient(
                        circle at top left,
                        rgba(40, 40, 40, 0.58) 0%,
                        rgba(40, 40, 40, 0.58) 100%
                    ),
                    url(${backgroundImage})`,
                }}
            >
                <div className="heading-wrapper container">
                    <h1>Shop</h1>
                </div>
            </div>
            <div className="container">
                <div className={`product-cards-row-wrapper ${loading ? 'loading' : 'loaded'}`}>
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox type="danger">{error}</MessageBox>
                    ) : (
                        <div className="product-cards-row">
                            {products.map((data) => {
                                return (
                                    <ProductCard
                                        id={data._id}
                                        image={data.productImageUrl}
                                        name={data.productName}
                                        price={data.productPrice}
                                    ></ProductCard>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
