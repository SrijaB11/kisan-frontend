// import React from "react";
// import { Box, Button, TextField, Grid } from "@mui/material";

// function Register() {
//   return (
//     <div>

// <Box component="form"
//     sx={{border:"1px solid Black",
// }}>
//         <h1>Register Form</h1>
//       <Box>

//         <TextField id="outlined-basic" label="Full Name" variant="outlined"  fullwidth/>
//       </Box>
//       <Box>

//         <TextField id="outlined-basic" label="Email" variant="outlined"  fullwidth />
//       </Box>
//       <Box>

//         <TextField
//           id="outlined-basic"
//           label="Phone Number"
//           variant="outlined"
//            fullwidth
//         />
//       </Box>
//       <Box>

//         <TextField
//           id="outlined-basic"
//           label="Create Password"
//           variant="outlined"
//            fullwidth
//         />
//       </Box>
//       <Box>

//         <TextField
//           id="outlined-basic"
//           label="Confirm Password"
//           variant="outlined"
//           fullwidth
//         />
//       </Box>
//       <Button type="submit" contained">Register</Button>
//       </Box>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔎 Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await axios.post("http://localhost:5000/customer/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
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
        Register
      </Typography>

      <TextField
        label="Full Name"
        name="name"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <TextField
        label="Phone"
        name="phone"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password}
      />

      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default Register;
