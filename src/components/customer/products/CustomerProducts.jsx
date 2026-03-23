import { useEffect, useState } from "react";
import axios from "axios";
import CustomerProductCard from "./CustomerProductCard";
import { Grid } from "@mui/material";

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
      );

      const data = Array.isArray(res.data) ? res.data : res.data.products || [];

      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
          <CustomerProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CustomerProducts;
