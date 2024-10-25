import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function AllListings() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`../services/productServices.js`, fetcher);
}
