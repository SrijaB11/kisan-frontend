const farmers = [
  {
    name: "Ramesh Kumar",
    place: "Hyderabad",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sunita Patel",
    place: "Punjab",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Verma",
    place: "Rajasthan",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Farmers() {
  return (
    <div className="section">
      <h2>Meet Our Farmers</h2>

      <div className="grid">
        {farmers.map((f, i) => (
          <div className="card" key={i}>
            <img src={f.img} alt="" />

            <h3>{f.name}</h3>

            <p>{f.place}</p>

            <button>View Store</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Farmers;
