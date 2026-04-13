import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import axios from "axios";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const API = process.env.REACT_APP_BE_API_URL;

  async function getProducts() {
    try {
      let res = await axios.get(`${API}/product/getAll`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function getNewProduct(data) {
    try {
      let res = await axios.post(`${API}/product/add`, data);
      setProducts([...products, res.data]);
    } catch {
      alert("Error adding product");
    }
  }

  async function updateProduct(data) {
    try {
      await axios.put(`${API}/product/edit/${data._id}`, data);
      setProducts(products.map((p) => (p._id === data._id ? data : p)));
    } catch {
      alert("Update failed");
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/product/delete/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch {
      alert("Delete failed");
    }
  }

  return (
    <div className="products-container">
      <AddProduct getNewProduct={getNewProduct} />

      <div className="products-grid">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            item={item}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
