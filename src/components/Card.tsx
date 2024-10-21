import "./card.css";
//define thetype for a single dessert item
interface Dessert {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

interface DessertCardProps{
  product: Dessert;
  onAddToCart: () => void;
}

const Card: React.FC<DessertCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="dessert-card">
      {/* Image */}
      <div className="dessert-image">
      <img src={product.image.desktop} alt="" className="image" />
       {/* Add to Cart Button */}
       <button className="add-to-cart-btn" onClick={onAddToCart}>
          <img src="../../images/icon-add-to-cart.svg" alt="" className="cart-icon"/>
          Add to Cart</button>
      </div>

       {/* Product Info */}
        <div className="dessert-info">
        <p className="name">{product.category}</p>
        <p className="category">{product.name}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        </div>
        
       
      </div>
  );
};

export default Card;
