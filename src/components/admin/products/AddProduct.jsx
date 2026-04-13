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
