import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validate()) return;

    try {
      const res = await axios.post("http://localhost:5000/customer/login", {
        email: formData.email,

        password: formData.password,
      });

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 400,
        margin: "50px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2} textAlign={"center"}>
        Login
      </Typography>

      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        onChange={handleChange}
        // error={!!errors.email}
        // helperText={errors.email}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        fullWidth
        margin="normal"
        onChange={handleChange}
        //error={!!errors.password}
        //helperText={errors.password}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
