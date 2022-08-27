import React, { useContext} from 'react';
import { CrateProduct } from './component/CreateProduct';
import { ErrorMessage } from './component/ErrorMessage';
import { Loader } from './component/Loader';
import { Modal } from './component/Modal';
import {Product} from './component/Product'
import { ModalContext } from './context/ModelContext';
import {useProducts} from './hooks/product'
import { IProduct } from './models';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }
  return (
    <div className='containet mx-auto max-w-2xl pt-5'> 
    {loading && <Loader/>}
    {error && <ErrorMessage error={error}/>}
    {products.map(product => <Product product={product} key={product.id}/>)}
    {modal && <Modal title="Create new product" onClose={()=>close()}>
      <CrateProduct onCreate={createHandler}/>
    </Modal>}
    <button 
    className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
    onClick={()=>open()}
    >+</button>
    </div>
  )
}

export default App;
