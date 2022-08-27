import React, { useState } from 'react';
import { CrateProduct } from './component/CreateProduct';
import { ErrorMessage } from './component/ErrorMessage';
import { Loader } from './component/Loader';
import { Modal } from './component/Modal';
import {Product} from './component/Product'
import {useProducts} from './hooks/product'
import { IProduct } from './models';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(false)
  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }
  return (
    <div className='containet mx-auto max-w-2xl pt-5'> 
    {loading && <Loader/>}
    {error && <ErrorMessage error={error}/>}
    {products.map(product => <Product product={product} key={product.id}/>)}
    {modal && <Modal title="Create new product" onClose={()=>setModal(false)}>
      <CrateProduct onCreate={createHandler}/>
    </Modal>}
    <button 
    className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
    onClick={()=>setModal(true)}
    >+</button>
    </div>
  )
}

export default App;
