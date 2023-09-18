// eslint-disable-next-line react/prop-types
const ResponsiveGrid = ({ children }) => {
  console.log(children);
  return <ul className="grid">{children}</ul>;
};

export default ResponsiveGrid;
