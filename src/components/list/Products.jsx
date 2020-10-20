import React, { useContext } from 'react'
import EntrieContext from '../contexts/EntrieContext'
import ProductCard from './ProductCard';

const Products = () => {
    const {fields} = useContext(EntrieContext)
    console.log(fields);
    return (
        <div style={{overflowY: 'scroll', height: '37rem'}}>
            {fields.length > 0 && fields.map((m, i) => (
                <ProductCard data={m} key={i}/>
            ))}
        </div>
    )
}

export default Products
