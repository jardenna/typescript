import React from 'react';
import { useAppSelector } from '../../app/hooks';

import { getProductSelector } from '../../app/productsSlice';

const ProductList: React.FC = () => {
   const products = useAppSelector(getProductSelector);

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