import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1> Product Details</h1>
      <ul>
        <div
          key={product.id}
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
      </ul>
    </>
  );
}
