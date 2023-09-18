import { useState } from "react";

export function useFilters() {
    
  const [filter, setfilter] = useState({
    category: "all",
    price: 0,
  });

  const handleFilterChange = (e) => {
    const { value, name } = e.target;
    setfilter({ ...filter, [name]: value });
  };

  return { filter, handleFilterChange };
}
