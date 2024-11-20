import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>All products</h1>
      <ul>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div
              style={{
                border: "solid 1px black",
                width: "200px",
                margin: "1em",
                padding: "1em",
              }}
            >
              <h2>{product.name}</h2>
              <h5>{product.category}</h5>
              <h3>
                {product.currency} {product.price}
              </h3>
              <small>{product.description}</small>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
}
