const data = [
  "Seeds",
  "Vegetables",
  "Fruits",
  "Grains",
  "Fertilizers",
  "Tools",
];

function Categories() {
  return (
    <div className="section">
      <h2>Shop by Categories</h2>

      <div className="grid">
        {data.map((item, i) => (
          <div className="card" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
