import { useState } from 'react';
import './productlist.css'
import Card from './Card';
import productsData from '../../data/data.json';
import Cart from './Cart';

interface Dessert{
  image:{
    desktop: string;
  };
  name: string;
  price: number;
}

interface CartItem{
  name: string;
  price:number;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (dessert: Dessert) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.name === dessert.name);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { name: dessert.name, price: dessert.price, quantity: 1 }];
    });
  };

  const removeItem = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };


  return (
    <div className='app-content'>
        <h1>Desserts</h1>
    <div className='main-content'>
    <div className="product-list">
        {productsData && productsData.map((product, index) =>(
            <Card key={index} product={product} onAddToCart={() => addToCart(product)}/>
        ))}
    </div>
    <Cart cartItems={cartItems} onRemoveItem={removeItem}/>
    </div>
    
       
    </div>
  )
}

export default ProductList