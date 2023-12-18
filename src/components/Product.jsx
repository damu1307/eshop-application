import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="sm:w-full md:w-full lg:w-1/2">
        <ProductSlider/>
      </div>
      <ProductDetails />
    </div>
  );
};

export default Product;
