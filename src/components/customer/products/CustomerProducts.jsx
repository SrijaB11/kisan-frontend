import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./CustomerProducts.css";

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="customer-products">
      {products.map((item) => (
        <ProductCard item={item} key={item._id} />
      ))}
    </div>
  );
}

export default CustomerProducts;
