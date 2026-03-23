import { Button, Chip } from "@mui/material";
import styles from "./CustomerProductCard.module.css";

function CustomerProductCard({ item }) {
  function addToCart() {
    alert(`${item.name} added to cart 🛒`);
  }

  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />

      <div className={styles.info}>
        <h2>{item.name}</h2>
        <p className={styles.price}>
          ₹{item.price} / {item.unit}
        </p>
      </div>

      <Button variant="contained" className={styles.btn} onClick={addToCart}>
        Add to Cart
      </Button>

      {item.isOrganic && <Chip label="Organic" className={styles.organic} />}

      <Chip label={`Q: ${item.quantity} ${item.unit}`} className={styles.qty} />
    </div>
  );
}

export default CustomerProductCard;
