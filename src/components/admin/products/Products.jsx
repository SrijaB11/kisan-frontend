// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import styles from "./products.module.css";
// import { Grid } from "@mui/material";
// import AddProduct from "./AddProduct";
// import axios from "axios";

// function Products() {
//   const [products, setproducts] = useState([]);

//   // const [editProduct, seteditProduct] = useState({});

//   async function getNewProduct(data) {
//     try {
//       let res = await axios.post(
//         `${process.env.REACT_APP_BE_API_URL}/product/add`,
//         data,
//       );

//       // console.log(res);
//       let arr = [...products];
//       arr.push(data);
//       setproducts(arr);
//     } catch (err) {
//       window.alert("error");
//     }
//   }

//   async function getEditProductDataFromChild(data) {
//     // console.log(data,"kjuyfds");
//     let res = await axios.put(
//       `${process.env.REACT_APP_BE_API_URL}/product/edit/${data._id}`,
//       data,
//     );
//     // console.log(res);
//     let newArr = products.map((item, arr) => {
//       if (item._id == data._id) {
//         return data;
//       } else {
//         return item;
//       }
//     });
//     setproducts(newArr);
//   }

//   async function deleteProduct(id) {
//     let res = await axios.delete(
//       `${process.env.REACT_APP_BE_API_URL}/product/delete/${id}`,
//     );
//     let newArr = products.filter((item, ind) => {
//       if (id == item._id) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//     // console.log(newArr);
//     setproducts(newArr);
//   }
//   let display = products.map((item, ind) => {
//     // console.log(item,"item");
//     return (
//       <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
//         <ProductCard
//           item={item}
//           getEditProductDataFromChild={getEditProductDataFromChild}
//           deleteProduct={deleteProduct}
//         />
//       </Grid>
//     );
//   });

//   async function getProducts() {
//     let res = await axios.get(
//       `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
//     );
//     setproducts(res.data);
//   }
//   // console.log(display);
//   useEffect(() => {
//     getProducts();
//   }, []);
//   return (
//     <div>
//       <AddProduct getNewProduct={getNewProduct} />
//       <Grid container spacing={2}>
//         {display}
//       </Grid>
//     </div>
//   );
// }

// export default Products;
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
