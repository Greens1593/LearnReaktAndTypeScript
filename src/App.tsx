import React, { createElement as newEl, useState } from 'react';
import {Product} from './component/Product'
import {products} from './data/products'

function App() {
  return (
    <div className='containet mx-auto max-w-2xl pt-5'> 
    <Product product={products[0]}/>
    <Product product={products[1]}/>
    </div>
  )
}

export default App;
