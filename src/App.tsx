import React from 'react';
import { ErrorMessage } from './component/ErrorMessage';
import { Loader } from './component/Loader';
import {Product} from './component/Product'
import {useProducts} from './hooks/product'

function App() {
  const {loading, error, products} = useProducts()

  return (
    <div className='containet mx-auto max-w-2xl pt-5'> 
    {loading && <Loader/>}
    {error && <ErrorMessage error={error}/>}
    {products.map(product => <Product product={product} key={product.id}/>)}

    </div>
  )
}

export default App;
