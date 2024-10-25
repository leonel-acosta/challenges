import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const products = getAllProducts();

  console.log(products);

  return res.status(200).json(products);
}
