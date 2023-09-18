export function exctractCategory(products) {
  return products.reduce(
    (acum, { category }) =>
      !acum.includes(category) ? [...acum, category] : [...acum],
    []
  );
}
export function exctractMinMaxPrice(products) {
  const price = products.map(({ price }) => {
    return price;
  });

  return { min: Math.min(...price), max: Math.max(...price) };
}
