import { useContext } from "react";
import GlobalContext from "../context/Contexts";
import Select from "./Select";
import Icons from "./Icons";
const Header = () => {
  const { filter, handleFilterChange } = useContext(
    GlobalContext.FilterContext
  );
  const { productData } = useContext(GlobalContext.ProductContext);
  const { categories, price } = productData;
  return (
    <header>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="">Shopping Cart App</h1>
        <Icons.CartIcon />
      </section>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
        action=""
      >
        <Select onChange={handleFilterChange}>
          {categories.map((cat) => (
            <option
              key={cat}
              selected={filter.category === cat}
              value={`${cat}`}
            >
              {cat.toUpperCase()}
            </option>
          ))}

          <option key="all" value="all">
            All
          </option>
        </Select>
        <input
          name="price"
          type="range"
          min={price.min}
          max={price.max}
          onChange={handleFilterChange}
        />
        <span>
          <strong>{filter.price}</strong>$
        </span>
      </form>
    </header>
  );
};
export default Header;
