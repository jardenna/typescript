import { FormEvent, ChangeEvent, useState } from 'react';

import { addProduct, IProducts } from '../../app/productsSlice';
import { useAppDispatch } from '../../app/hooks';
const ProductForm = () => {

   const dispatch = useAppDispatch();

   const [product, setProduct] = useState<IProducts>({
      id: '',
      title: '',
      price: 0

   });

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const newProduct = { ...product, [name]: value };
      setProduct(newProduct);
   };

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(addProduct(product));
   };


   return (
      <div className="Form">

         <h1>Demo Form for React</h1>
         <form onSubmit={onSubmit}>
            <div className="input-container">
               <label htmlFor="title">Title</label>
               <input
                  id="title"
                  name="title"
                  value={product.title}
                  onChange={onChange}
                  placeholder="Title"
                  type="text"
               />
            </div>
            <div className="input-container">
               <label htmlFor="price">Price</label>
               <input
                  id="price"
                  name="price"
                  value={Number(product.price)}
                  onChange={onChange}
                  placeholder="Price"
                  type="number"
               />
            </div>
            <div className="input-container">
               <label htmlFor="id">Id</label>
               <input
                  id="id"
                  name="id"
                  value={product.id}
                  onChange={onChange}
                  placeholder="ID"
                  type="text"
               />
            </div>
            <button type="submit" >
               Add product
            </button>
         </form>

      </div>

   );
};

export default ProductForm;