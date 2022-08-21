import React from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

export function Product (props:ProductProps){
    return <div
    className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
        <img src={props.product.image} className='w-1/6' alt={props.product.title}/>
        <p>{props.product.title}</p>
        <span className='front-bold'>{props.product.price}</span>
    </div>
}