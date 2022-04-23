import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  const productList = products.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return <div>{productList}</div>;
}
