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
