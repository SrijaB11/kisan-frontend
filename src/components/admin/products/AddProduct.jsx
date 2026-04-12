// import React, { useState } from "react";
// import styles from "./products.module.css";

// function AddProduct({ getNewProduct }) {
//   const [name, setname] = useState("");
//   const [price, setprice] = useState(0);
//   const [category, setcategory] = useState("");
//   const [unit, setunit] = useState("");
//   const [quantity, setquantity] = useState();
//   const [isOrganic, setisOrganic] = useState(false);

//   function add() {
//     let product = { name, category, price, unit, quantity, isOrganic };
//     getNewProduct(product)
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         onChange={(event) => setname(event.target.value)}
//       />
//       <input
//         name="category"
//         onChange={(event) => setcategory(event.target.value)}
//       />
//       <input name="price" onChange={(event) => setprice(event.target.value)} />
//       <label for="unit">Unit</label>

//       <input
//         name="category"
//         onChange={(event) => setunit(event.target.value)}
//       />
//       <select name="unit" id="unit">
//         <option value="kg">Kg</option>
//         <option value="Dozen">Dozen</option>
//         <option value="liter">Liter</option>
//       </select>
//       <input
//         name="quantity"
//         onChange={(event) => setquantity(event.target.value)}
//       />
//       <label class="switch">
//         <input
//           type="checkbox"
//           name="isOrganic"
//           onChange={(event) => setisOrganic(event.target.checked)}
//         />
//         <span class="slider round"></span>
//       </label>
//       <button onClick={add}>ADD PRODUCT</button>
//     </div>
//   );
// }

// export default AddProduct;

// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   InputLabel,
//   MenuItem,
//   Select,
//   Switch,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";

// function AddProduct({ getNewProduct }) {
//   const [name, setname] = useState("");
//   const [price, setprice] = useState(0);
//   const [category, setcategory] = useState("");
//   const [unit, setunit] = useState("");
//   const [quantity, setquantity] = useState();
//   const [isOrganic, setisOrganic] = useState(false);

//   function add() {
//     let product = {
//       name,
//       price,
//       category,
//       unit,
//       quantity,
//       isOrganic,
//     };
//     // console.log(product);
//     getNewProduct(product);
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         border: "2px solid black",
//         padding: "30px",
//         gap: "10px",
//       }}
//     >
//       <TextField
//         label="name"
//         onChange={(event) => setname(event.target.value)}
//       />
//       <TextField
//         label="category"
//         onChange={(event) => setcategory(event.target.value)}
//       />
//       <TextField
//         label="price"
//         onChange={(event) => setprice(event.target.value)}
//       />
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Unit</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           // value={age}
//           label="Unit"
//           onChange={(event) => setunit(event.target.value)}
//         >
//           <MenuItem value={"kg"}>Kg</MenuItem>
//           <MenuItem value={"dozen"}>dozen</MenuItem>
//           <MenuItem value={"liter"}>liter</MenuItem>
//         </Select>
//       </FormControl>
//       <TextField
//         label="quantity"
//         onChange={(event) => setquantity(event.target.value)}
//       />
//       <FormControlLabel
//         control={
//           <Switch
//             onChange={(event) => setisOrganic(event.target.checked)}
//             name="isOrganic"
//           />
//         }
//         label="Organic"
//       />

//       <Button onClick={add}>Add Product</Button>
//     </Box>
//   );
// }

// export default AddProduct;
import React, { useState } from "react";

function AddProduct({ getNewProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    unit: "",
    quantity: "",
    isOrganic: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.category) {
      return alert("Fill all fields");
    }
    if (form.price <= 0 || form.quantity <= 0) {
      return alert("Invalid price/quantity");
    }

    getNewProduct(form);

    setForm({
      name: "",
      price: "",
      category: "",
      unit: "",
      quantity: "",
      isOrganic: false,
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <select name="unit" value={form.unit} onChange={handleChange}>
        <option value="">Select Unit</option>
        <option value="kg">Kg</option>
        <option value="dozen">Dozen</option>
        <option value="liter">Liter</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="isOrganic"
          checked={form.isOrganic}
          onChange={handleChange}
        />
        Organic
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
