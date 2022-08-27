import React from 'react';
import {Product} from './component/Product'
import {useProducts} from './hooks/product'

function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className='containet mx-auto max-w-2xl pt-5'> 
    {loading && <p className='text-center'>Loading...</p>}
    {error && <p className='text-center text-red-600'>{error}</p>}
    {products.map(product => <Product product={product} key={product.id}/>)}

    </div>
  )
}

export default App;
