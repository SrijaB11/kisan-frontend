import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decCount, incCount, deleteItem } from "../../../redux/cartSlice";
import "./cart.css";

function CartItem({ item }) {
  let { name, category, price, unit, quantity, image } = item.productId;

  const [count, setCount] = useState(item.count);
  const [totalPrice, setTotalPrice] = useState(item.count * price);

  const dispatch = useDispatch();

  async function dec() {
    if (count <= 1) return;

    await axios.post(`${process.env.REACT_APP_BE_API_URL}/cart/count`, {
      id: item._id,
      operation: "dec",
    });

    dispatch(decCount(item._id));

    setCount((prev) => {
      const newVal = prev - 1;
      setTotalPrice(newVal * price);
      return newVal;
    });
  }

  async function inc() {
    if (count >= quantity) {
      alert(`Only ${quantity} ${unit} available`);
      return;
    }

    await axios.post(`${process.env.REACT_APP_BE_API_URL}/cart/count`, {
      id: item._id,
      operation: "inc",
    });

    dispatch(incCount(item._id));

    setCount((prev) => {
      const newVal = prev + 1;
      setTotalPrice(newVal * price);
      return newVal;
    });
  }

  async function removeItem() {
    await axios.delete(
      `${process.env.REACT_APP_BE_API_URL}/cart/delete/${item._id}`,
    );
    dispatch(deleteItem(item._id));
  }

  return (
    <Grid className="cart-item" size={{ xs: 12 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box component="img" src={image} className="cart-img" />

        <Box>
          <Typography>{category}</Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography>₹ {price}</Typography>
        </Box>

        <Stack direction="row" alignItems="center">
          <Button onClick={dec}>-</Button>
          <Box>{count}</Box>
          <Button onClick={inc}>+</Button>
        </Stack>

        <Typography>₹ {totalPrice}</Typography>

        <Button color="error" onClick={removeItem}>
          X
        </Button>
      </Stack>

      <Divider sx={{ mt: 2 }} />

      {quantity === 0 && (
        <Box
          sx={{
            position: "absolute",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Out of Stock
        </Box>
      )}
    </Grid>
  );
}

export default CartItem;
