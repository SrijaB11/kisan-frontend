import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import "./cart.css";

function CartItems() {
  const [products, setProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const state = useSelector((state) => state.cart);

  useEffect(() => {
    setProducts(state.cart);

    let total = state.cart.reduce((acc, item) => {
      return acc + item.count * item.productId.price;
    }, 0);

    setGrandTotal(total);
  }, [state]);

  return (
    <Grid container spacing={3} className="cart-container">
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box className="cart-box">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4">Shopping Cart</Typography>
            <Typography>Items - {products.length}</Typography>
          </Stack>

          <Divider />

          <Grid container spacing={2}>
            {products.length === 0
              ? "Cart Empty"
              : products.map((item) => <CartItem item={item} key={item._id} />)}
          </Grid>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <Summary totalQuantity={products.length} grandTotal={grandTotal} />
      </Grid>
    </Grid>
  );
}

export default CartItems;
