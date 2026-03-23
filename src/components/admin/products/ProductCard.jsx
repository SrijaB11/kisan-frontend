import { useState } from "react";
import styles from "./products.module.css";
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Switch,
  TextareaAutosize,
  TextField,
} from "@mui/material";

function ProductCard({ item, getEditProductDataFromChild, deleteProduct }) {
  const [isEdit, setisEdit] = useState(false);
  const [product, setproduct] = useState(item);
  //const [editproduct, seteditproduct] = useState(item);

  function edit(event) {
    let value = event.target.value;
    let name = event.target.name;
    let obj = { ...product };
    obj[name] = value;
    setproduct(obj);
  }
  function handleIsorganic(event) {
    let value = event.target.Checked;

    let name = event.target.name;
    let obj = { ...product };
    obj[name] = value;
    setproduct(obj);
  }
  // let { image, name, price, isOrganic, quantity, unit } = item;
  console.log(item);
  return (
    <div className={styles.card}>
      <img src={product.image} alt="" />
      {isEdit ? (
        <Box>
          <TextField value={product.name} onChange={edit} name="name" />
          <TextField value={product.price} onChange={edit} name="price" />
        </Box>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <p>
            {product.price}/{product.unit}
          </p>
        </div>
      )}
      {isEdit ? (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            let res = window.confirm("want to update?");
            if (res == false) return;
            getEditProductDataFromChild(product);
            setisEdit(false);
          }}
        >
          Submit
        </Button>
      ) : (
        <Button variant="contained" onClick={() => setisEdit(true)}>
          Edit
        </Button>
      )}
      <Button
        variant="contained"
        sx={{ backgroundColor: "red" }}
        onClick={() => {
          let res = window.confirm("want to Delete?");
          if (res == true) {
            deleteProduct(product._id);
          }
        }}
      >
        Delete
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        {isEdit ? (
          <FormControlLabel
            control={
              <Switch
                defaultChecked={product.isOrganic ? "defaultChecked" : ""}
                onChange={handleIsorganic}
                name="isOrganic"
              />
            }
            label="organic"
          />
        ) : product.isOrganic ? (
          <Chip label="Organic" sx={{ backgroundColor: "green" }} />
        ) : (
          ""
        )}
      </Box>
      <Chip
        label={`Q: ${product.quantity} ${product.unit}`}
        color="primary"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      />
    </div>
  );
}

export default ProductCard;
