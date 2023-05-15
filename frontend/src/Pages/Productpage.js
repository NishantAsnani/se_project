import Products from "./Products";
import Data from '../Data'


const ProductPage = ({handleAddProduct}) => {
  return (
    <>
      <section className="card_alignment">
        {Data.map((product) => {
          return (
              <Products key={product.id} product={product} {...product} handleAddProduct={handleAddProduct}/>
          );
        })}
      </section>
    </>
  );
};

export default ProductPage;
