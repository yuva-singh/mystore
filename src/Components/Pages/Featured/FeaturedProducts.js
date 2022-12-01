import { useProductContext } from "../../Context/ProductContect";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="text-primary">Check Now!</div>
        <h2 className="common-heading">Our Feature Services</h2>
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
      </div>
    </div>
  );
};
export default FeatureProduct;