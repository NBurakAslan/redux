import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "first book I ever read",
  },
  {
    id: "p2",
    price: 4,
    title: "my second book",
    description: "the second book I ever read",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((pro) => (
          <ProductItem
            key={pro.id}
            id={pro.id}
            title={pro.title}
            price={pro.price}
            description={pro.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
