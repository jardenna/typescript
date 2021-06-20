import React from 'react';
import { useSelector } from 'react-redux';

import { getProductSelector } from '../../state/productsSlice';

const ProductList: React.FC = () => {
   const products = useSelector(getProductSelector);

   return (
      <section>
         <h2>Game</h2>

         <ul>
            {products.map(products =>
               <li key={products.id}>
                  <p>{products.title}</p>
                  <span>{products.price}</span>

               </li>
            )}
         </ul>
      </section>
   );
};

export default ProductList;