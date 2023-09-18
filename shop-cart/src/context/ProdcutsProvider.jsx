import { useEffect, useState, useContext } from "react";
import GlobalContext from "./Contexts";
import { products } from "../mocks/products.json";
import { exctractCategory, exctractMinMaxPrice } from "../helpers/product";
const ProdcutsProvider = ({ children }) => {
  const { filter } = useContext(GlobalContext.FilterContext);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [productData, setproductData] = useState({
    categories: [],
    price: { min: 0, max: 0 },
  });

  useEffect(() => {
    const categories = exctractCategory(products);
    const prices = exctractMinMaxPrice(products);

    setproductData({
      ...productData,
      categories: [...categories],
      price: { ...prices },
    });
  }, []);

  //   Filter the products
  useEffect(() => {
    const productsAfterFilter = products.filter((product) =>
      filter.category === "all"
        ? product.price >= filter.price
        : product.category === filter.category && product.price >= filter.price
    );

    setfilteredProducts(productsAfterFilter);
  }, [filter]);

  return (
    <GlobalContext.ProductContext.Provider
      value={{
        products: filteredProducts,
        productData,
      }}
    >
      {children}
    </GlobalContext.ProductContext.Provider>
  );
};

export default ProdcutsProvider;
