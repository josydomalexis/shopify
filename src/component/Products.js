import { useContext } from "react";
import { dataSet } from "./Main";
import { ProductListCards } from "./ProductListCards";

function Products() {
  const { DATA } = useContext(dataSet);
  const productList = DATA.products;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {productList.map((product, index) => {
            return (
              <ProductListCards key={index} index={product.id} data={product} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
