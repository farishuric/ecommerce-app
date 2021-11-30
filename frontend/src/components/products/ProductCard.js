import React from 'react'

function ProductCard(props) {
    const data = props;
    return (
        <div className="product-card-wrapper">
            <div className="product-card-image">
                <img src={data.image} alt="" />
            </div>
            <div className="product-card-body">
                <h5 className="product-name">{data.name}</h5>
                <p className="product-price">€{data.price}</p>
            </div>
        </div>
    )
}

export default ProductCard
