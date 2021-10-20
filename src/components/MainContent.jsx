import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function MainContent() {
  const products = useSelector((state) => {
    return state.products.value;
  });

  return (
    <div className="grid grid-cols-4  gap-8 mt-10 mb-10">
      {products.map((product, index) => {
        return <ProductCard props={product} key={index} />;
      })}
    </div>
  );
}

export default MainContent;
