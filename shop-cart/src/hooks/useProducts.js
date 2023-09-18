import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/Contexts";
import { exctractCategory, exctractMinMaxPrice } from "../helpers/product";
import { products } from "../mocks/products.json";

const useProducts = () => {
  const {filter} = useContext(GlobalContext.FilterContext);
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
        : product.category === filter.category
    );

    setfilteredProducts(productsAfterFilter);
  }, [filter]);

  return { products: filteredProducts, productData };
};

export default useProducts;
