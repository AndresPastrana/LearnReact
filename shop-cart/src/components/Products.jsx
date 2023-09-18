import { useContext } from "react";
import GlobalContext from "../context/Contexts";
import { useCart } from "../hooks/useCart";
import Icons from "./Icons";

const ProductItem = ({ product, addToCart, removeFromCart, isInCart }) => {
  const handleButtonClik = () => {
    return isInCart ? removeFromCart(product) : addToCart(product);
  };

  return (
    <li>
      <div>
        {/* <img src={product.thumbnail} alt={`Imagen de ${product.title}`} /> */}
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <p>{product.title}</p>
        <p>
          <strong>$ </strong>
          {product.price}
        </p>
      </div>
      <footer onClick={handleButtonClik}>
        <div
          className="icon_add_to_cart"
          style={{ backgroundColor: isInCart ? "red" : "blue" }}
          onClick={handleButtonClik}
        >
          <Icons.AddToCartIcon />
        </div>
      </footer>
    </li>
  );
};

const Products = () => {
  const { products } = useContext(GlobalContext.ProductContext);
  const { add_to_cart, remove_from_cart, checkIfExist } = useCart();
  return (
    <ul className="flex">
      {products.slice(0, 15).map((p) => {
        const isInCart = checkIfExist(p) >= 0;

        return (
          <ProductItem
            key={p.id}
            product={p}
            addToCart={add_to_cart}
            removeFromCart={remove_from_cart}
            isInCart={isInCart}
          />
        );
      })}
    </ul>
  );
};

export default Products;
