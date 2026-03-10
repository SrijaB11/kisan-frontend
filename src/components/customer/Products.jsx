const products = [
  {
    name: "Organic Tomatoes",
    price: "₹120/kg",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    name: "Fresh Mango Box",
    price: "₹450",
    img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
  },
  {
    name: "Hybrid Wheat Seeds",
    price: "₹300",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    name: "Natural Fertilizer",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1582515073490-dc5b6b6d8d52",
  },
];

function Products() {
  return (
    <div className="section">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} alt="" />

            <h3>{p.name}</h3>

            <p>{p.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
