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

import React, { useState } from "react";
import styles from "./products.module.css";

function AddProduct({ getNewProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isOrganic, setIsOrganic] = useState(false);

  function add(e) {
    e.preventDefault();

    if (!name || !price || !category || !unit || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const product = {
      name,
      category,
      price: Number(price),
      unit,
      quantity: Number(quantity),
      isOrganic,
    };

    getNewProduct(product);

    // reset form
    setName("");
    setCategory("");
    setPrice("");
    setUnit("");
    setQuantity("");
    setIsOrganic(false);
  }

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={add}>
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="">Select Unit</option>
          <option value="kg">Kg</option>
          <option value="Dozen">Dozen</option>
          <option value="liter">Liter</option>
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <div className={styles.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={isOrganic}
              onChange={(e) => setIsOrganic(e.target.checked)}
            />
            Organic Product
          </label>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
