import React from 'react'

const ProductCard = ({data}) => {
    return (
        <div className="entrie-productCard__container animate__animated animate__bounceInDown">
            <div style={{padding: "0px 20px"}}>{data.product}</div>
            <div style={{padding: "0px 20px"}} className="entrie-productCard__info">
                <div>{data.quantity}</div>
                <div>{data.unit}</div>
            </div>
        </div>
    )
}

export default ProductCard
