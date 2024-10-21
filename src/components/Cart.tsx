import './cart.css'
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>Your Cart ({cartItems.length})</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div >
              {item.quantity}x {item.name} @ ${item.price.toFixed(2)}
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
      <button>Confirm Order</button>
    </div>
  );
};

export default Cart;
