import CartSideBar from "./components/CartSideBar";
import Header from "./components/Header";
import Products from "./components/Products";
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* The headr doesn need access to cartcontext */}
        <Header />

        <CartProvider>
          <main>
            <Products />
          </main>
          <CartSideBar />
        </CartProvider>
      </div>
    </>
  );
};

export default App;
