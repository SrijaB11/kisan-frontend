import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../../redux/cartSlice";
import "./cart.css";

function Summary({ totalQuantity, grandTotal }) {
  const [formData, setFormData] = useState({
    name: "",
    phNo: "",
    pincode: "",
    address: "",
  });

  const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validateForm() {
    const { name, phNo, pincode, address } = formData;

    if (!name.trim()) return alert("Name is required");
    if (!/^[6-9]\d{9}$/.test(phNo)) return alert("Enter valid phone number");
    if (!/^\d{6}$/.test(pincode)) return alert("Enter valid pincode");
    if (address.length < 10)
      return alert("Address must be at least 10 characters");

    return true;
  }

  async function handlePayment() {
    if (!validateForm()) return;

    if (!localStorage.getItem("token")) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      let res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}/payment/create-order`,
        { amount: grandTotal },
      );

      let data = res.data;

      const options = {
        key: process.env.REACT_APP_KEY,
        amount: data.amount,
        currency: "INR",
        order_id: data.id,

        handler: async function (response) {
          alert("Payment Successful");

          await axios.post(
            `${process.env.REACT_APP_BE_API_URL}/orders/save`,
            {
              products: [...state.cart],
              ...response,
              ...formData,
              price: grandTotal,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            },
          );

          dispatch(deleteAll());
        },

        prefill: {
          name: formData.name,
          contact: formData.phNo,
        },

        theme: {
          color: "#1976d2",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      alert("Payment failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const hasOutOfStock = state.cart.some(
      (item) => item.productId.quantity === 0,
    );
    setDisableButton(hasOutOfStock);
  }, [state]);

  return (
    <Stack className="summary-box">
      <Typography variant="h4">Summary</Typography>
      <Divider />

      <Stack direction="row" justifyContent="space-between">
        <Typography>Items - {totalQuantity}</Typography>
        <Typography>₹ {grandTotal.toLocaleString()}</Typography>
      </Stack>

      <Divider />

      <Box>
        <Typography variant="h6">Address</Typography>

        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          label="Phone Number"
          name="phNo"
          fullWidth
          margin="normal"
          value={formData.phNo}
          onChange={handleChange}
        />

        <TextField
          label="Pincode"
          name="pincode"
          fullWidth
          margin="normal"
          value={formData.pincode}
          onChange={handleChange}
        />

        <TextField
          label="Address"
          name="address"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={formData.address}
          onChange={handleChange}
        />
      </Box>

      <Divider />

      <Button
        className="place-order-btn"
        disabled={
          totalQuantity <= 0 ||
          disableButton ||
          loading ||
          !formData.name ||
          !formData.phNo ||
          !formData.pincode ||
          !formData.address
        }
        onClick={handlePayment}
      >
        {loading ? "Processing..." : "Place Order"}
      </Button>
    </Stack>
  );
}

export default Summary;
