import React, { useContext } from 'react'
import EntrieContext from '../contexts/EntrieContext'
import ProductCard from './ProductCard';

const Products = () => {
    const {fields} = useContext(EntrieContext)
    console.log(fields);
    return (
        <div style={{overflowY: 'scroll', height: '37rem'}} className="flex column eightw">
            {fields.length > 0 && fields.map((m, i) => (
                <ProductCard data={m} id={i} key={i}/>
            ))}
        </div>
    )
}

export default Products
