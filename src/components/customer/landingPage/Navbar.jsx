// import React, { useState, useEffect } from "react";
// import styles from "./Navbar.module.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import axios from "axios";
// import { TiShoppingCart } from "react-icons/ti";
// function Navbar() {
//   const [display, setdisplay] = useState(false);
//   const [search, setSearch] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   function addToCart() {
//     navigate("/customer/cart");
//   }

//   // ✅ Fetch suggestions (debounced)
//   useEffect(() => {
//     const delay = setTimeout(async () => {
//       if (search.trim() === "") {
//         setSuggestions([]);
//         return;
//       }

//       try {
//         let res = await axios.get(
//           `${process.env.REACT_APP_BE_API_URL}/product/getAll`,
//         );

//         const data = Array.isArray(res.data)
//           ? res.data
//           : res.data.products || [];

//         const filtered = data.filter(
//           (item) =>
//             item.name.toLowerCase().includes(search.toLowerCase()) ||
//             item.category.toLowerCase().includes(search.toLowerCase()),
//         );

//         setSuggestions(filtered.slice(0, 5)); // limit to 5
//         setShowDropdown(true);
//       } catch (err) {
//         console.error(err);
//       }
//     }, 300); // debounce

//     return () => clearTimeout(delay);
//   }, [search]);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value);

//     navigate(`${location.pathname}?search=${value}`);
//   };

//   const handleSelect = (value) => {
//     setSearch(value);
//     setShowDropdown(false);
//     navigate(`${location.pathname}?search=${value}`);
//   };

//   return (
//     <div className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src="./logo.png" alt="" className={styles.logo} />
//         <h3>KisanMart</h3>
//       </div>

//       {/* ✅ SEARCH INPUT */}
//       <div className={styles.searchWrapper}>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={handleSearch}
//           onFocus={() => setShowDropdown(true)}
//           className={styles.searchInput}
//         />

//         {/* ✅ DROPDOWN */}
//         {showDropdown && suggestions.length > 0 && (
//           <div className={styles.dropdown}>
//             {suggestions.map((item) => (
//               <div
//                 key={item._id}
//                 className={styles.dropdownItem}
//                 onMouseDown={() => handleSelect(item.name)}
//               >
//                 {item.name}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Link to="/customer/products">Products</Link>
//       <TiShoppingCart size={40} onClick={addToCart} />
//       <div
//         className={styles.nameContainer}
//         onClick={() => setdisplay(true)}
//         tabIndex="0"
//         onBlur={() => setdisplay(false)}
//       >
//         <div className={styles.circle}>S</div>
//         <p>Srija</p>
//         <KeyboardArrowDownIcon />
//       </div>

//       {display && (
//         <div className={styles.dropDownContainer}>
//           <div style={{ padding: "10px" }}>
//             <div>Srija@gmail.com</div>
//             <div>Admin</div>
//           </div>
//           <div className={styles.line}></div>
//           <div
//             onMouseDown={() => {
//               localStorage.removeItem("token");
//               navigate("/");
//             }}
//             className={styles.logoutContainer}
//             style={{ padding: "10px" }}
//           >
//             <PowerSettingsNewIcon sx={{ fontSize: "1.5rem" }} />
//             <button className={styles.logoutBtn}>Logout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
