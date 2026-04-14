// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import "./CustomerProducts.css";

// function CustomerProducts() {
//   const [products, setProducts] = useState([]);

//   async function getProducts() {
//     try {
//       let res = await axios.get(
//         `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
//       );
//       setProducts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="customer-products">
//       {products.map((item) => (
//         <ProductCard item={item} key={item._id} />
//       ))}
//     </div>
//   );
// }

// export default CustomerProducts;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import "./CustomerProducts.css";
// import { useLocation } from "react-router-dom";

// function CustomerProducts() {
//   const [products, setProducts] = useState([]);

//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const searchTerm = query.get("search") || "";

//   async function getProducts() {
//     try {
//       let res = await axios.get(
//         `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
//       );
//       setProducts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);

//   // ✅ FILTER PRODUCTS
//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   return (
//     <div className="customer-products">
//       {filteredProducts.length === 0 ? (
//         <h2>No products found</h2>
//       ) : (
//         filteredProducts.map((item) => (
//           <ProductCard item={item} key={item._id} />
//         ))
//       )}
//     </div>
//   );
// }

// export default CustomerProducts;
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./CustomerProducts.css";
import { useLocation } from "react-router-dom";

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

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

  // ✅ FILTER LOGIC
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="customer-products">
      {filteredProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        filteredProducts.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))
      )}
    </div>
  );
}

export default CustomerProducts;
