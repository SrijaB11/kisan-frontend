// import React, { useState } from "react";
// import styles from "./products.module.css";
// import {
//   Box,
//   Button,
//   Chip,
//   FormControlLabel,
//   Switch,
//   TextField,
// } from "@mui/material";

// function ProductCard({ item, getEditProductDataFromChild, deleteProduct }) {
//   const [isEdit, setisEdit] = useState(false);
//   const [product, setproduct] = useState(item);

//   // console.log(product,"abcd");
//   function edit(event) {
//     let value = event.target.value;
//     let name = event.target.name;
//     let obj = { ...product };
//     obj[name] = value;
//     // console.log(obj);
//     setproduct(obj);
//   }

//   function handleIsorganic(event) {
//     let value = event.target.checked;
//     let name = event.target.name;
//     console.log(name);
//     let obj = { ...product };
//     obj[name] = value;
//     // console.log(obj);
//     setproduct(obj);
//   }
//   return (
//     <div className={styles.card}>
//       <img src={product.image} alt="" />
//       {isEdit ? (
//         <Box>
//           <TextField value={product.name} onChange={edit} name="name" />
//           <TextField value={product.price} onChange={edit} name="price" />
//         </Box>
//       ) : (
//         <div>
//           <h1>{product.name}</h1>
//           <p>
//             Rs.{product.price} / {product.unit}
//           </p>
//         </div>
//       )}
//       {isEdit ? (
//         <Button
//           variant="contained"
//           color="success"
//           onClick={() => {
//             let res = window.confirm("want to update?");
//             if (res == false) return;

//             getEditProductDataFromChild(product);
//             setisEdit(false);
//           }}
//         >
//           Submit
//         </Button>
//       ) : (
//         <Button variant="contained" onClick={() => setisEdit(true)}>
//           Edit
//         </Button>
//       )}
//       {/* delete */}
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "red",
//         }}
//         onClick={() => {
//           let res = window.confirm("want to delete");
//           if (res == true) {
//             deleteProduct(product._id);
//           }
//         }}
//       >
//         Delete
//       </Button>

//       <Box
//         sx={{
//           position: "absolute",
//           top: "10px",
//           left: "10px",
//         }}
//       >
//         {isEdit ? (
//           <FormControlLabel
//             control={
//               <Switch
//                 defaultChecked={product.isOrganic ? "defaultChecked" : ""}
//                 onChange={handleIsorganic}
//                 name="isOrganic"
//               />
//             }
//             label="Organic"
//           />
//         ) : product.isOrganic ? (
//           <Chip
//             label="Organic"
//             sx={{
//               backgroundColor: "green",
//             }}
//           />
//         ) : (
//           ""
//         )}
//       </Box>
//       <Chip
//         label={`Q: ${product.quantity} ${product.unit}`}
//         color="primary"
//         sx={{
//           position: "absolute",
//           top: "10px",
//           right: "10px",
//         }}
//       />
//     </div>
//   );
// }

// export default ProductCard;
import React, { useState } from "react";

function ProductCard({ item, updateProduct, deleteProduct }) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState(item);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSave() {
    if (!data.name || data.price <= 0) {
      return alert("Enter valid data");
    }
    updateProduct(data);
    setEdit(false);
  }

  return (
    <div className="product-card">
      <img src={data.image} alt="" />

      {edit ? (
        <>
          <input name="name" value={data.name} onChange={handleChange} />
          <input name="price" value={data.price} onChange={handleChange} />
        </>
      ) : (
        <>
          <h3>{data.name}</h3>
          <p>
            ₹ {data.price} / {data.unit}
          </p>
        </>
      )}

      <div className="badge">
        {data.isOrganic && <span className="organic">Organic</span>}
        <span>Q: {data.quantity}</span>
      </div>

      <div className="actions">
        {edit ? (
          <button className="save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button onClick={() => setEdit(true)}>Edit</button>
        )}

        <button
          className="delete"
          onClick={() => {
            if (window.confirm("Delete product?")) {
              deleteProduct(data._id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
