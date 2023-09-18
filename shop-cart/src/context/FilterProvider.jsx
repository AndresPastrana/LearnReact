import { useFilters } from "../hooks/useFilters";

import GlobalContext from "./Contexts";

// Provider
export const FilterProvider = ({ children }) => {
  // State to share
  const { filter, handleFilterChange } = useFilters();
  return (
    <GlobalContext.FilterContext.Provider
      value={{ filter, handleFilterChange }}
    >
      {children}
    </GlobalContext.FilterContext.Provider>
  );
};
