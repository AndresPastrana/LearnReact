import { useState, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import Icons from "./Icons";

function CartItem({ product, addToCart, is }) {
  console.log(product);
  return (
    <li key={product.id}>
      <header>
        <img
          src={product.thumbnail}
          alt={`Imagen de prodcuto ${product.title}`}
        />
      </header>
      <main>
        <p>{product.title}</p>
      </main>

      <footer>
        <span>
          Quantity <strong>{product.quantity}</strong>
          <span className="cart_btn_add" onClick={() => addToCart(product)}>
            +
          </span>
        </span>
      </footer>
    </li>
  );
}

function Cart() {
  const { cart, add_to_cart, remove_from_cart, getTotalToPay } = useCart();

  return (
    <aside className="container_sidebar_cart">
      <ul>
        {cart.map((p) => (
          <CartItem key={p.id} product={p} addToCart={add_to_cart} />
        ))}
      </ul>
      <p style={{ textAlign: "center" }}>
        Total: <strong>{getTotalToPay()}</strong>
        <small>$</small>
      </p>
    </aside>
  );
}

const CartSideBar = () => {
  return (
    <>
      <Cart />
      {/* {!show && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "1rem",
          }}
          id="cart_btn"
          onClick={() => setshow(true)}
        >
          Cart
        </div>
      )} */}
    </>
  );
};

export default CartSideBar;
