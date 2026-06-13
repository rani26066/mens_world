import { useState } from "react";
import product1 from "./assets/product1.jpeg";
import product2 from "./assets/product2.jpeg";
import product3 from "./assets/product3.jpeg";
import product4 from "./assets/product4.jpeg";
import product5 from "./assets/Formal Pant/product5.jpeg";
import product6 from "./assets/Formal Pant/product6.jpeg";
import product7 from "./assets/Formal Pant/product7.jpeg";
import product8 from "./assets/Formal Pant/product8.jpeg";
import product9 from "./assets/Formal Shirt/product9.jpeg";
import product10 from "./assets/Formal Shirt/product10.jpeg";
import product11 from "./assets/Formal Shirt/product11.jpeg";
import product12 from "./assets/Formal Shirt/product12.jpeg";
import product13 from "./assets/Blazer/product13.jpeg";
import product14 from "./assets/Blazer/product14.jpeg";
import product15 from "./assets/Blazer/product15.jpeg";
import product16 from "./assets/Blazer/product16.jpeg";
import product17 from "./assets/Sports Wear/product17.jpeg";
import product18 from "./assets/Sports Wear/product18.jpeg";
import product19 from "./assets/Sports Wear/product19.jpeg";
import product20 from "./assets/Sports Wear/product20.jpeg";
import product21 from "./assets/Traditional Wear/product21.jpeg";
import product22 from "./assets/Traditional Wear/product22.jpeg";
import product23 from "./assets/Traditional Wear/product23.jpeg";
import product24 from "./assets/Traditional Wear/product24.jpeg";
import product25 from "./assets/Winter/product25.jpeg";
import product26 from "./assets/Winter/product26.jpeg";
import product27 from "./assets/Winter/product27.jpeg";
import product28 from "./assets/Winter/product28.jpeg";
import product29 from "./assets/Jeans/product29.jpeg";
import product30 from "./assets/Jeans/product30.jpeg";
import product31 from "./assets/Jeans/product31.jpeg";
import product32 from "./assets/Jeans/product32.jpeg";
import sakthi from "./assets/sakthi.jpeg";
import rani from "./assets/rani.jpeg";
import kannams from "./assets/kannams.jpeg";
function App() {
  // Products are added directly in code. No Add Product form/card is shown.
  const [products] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      category: "Tshirt",
      image: product1
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 999,
      category: "Tshirt",
      image: product2
    },
    {
      id: 3,
      name: "T-shirt",
      price: 1499,
      category: "Tshirt",
      image: product3
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 1299,
      category:"Tshirt",
      image: product4
    },
    {
      id: 5,
      name: "Formal Pant",
      price: 700,
      category:"Formal Shirt,Pant & Blazer",
      image: product5
    },
    {
      id: 6,
      name: "Formal Pant",
      price: 750,
      category:"Formal Shirt,Pant & Blazer",
      image: product6
    },
    {
      id: 7,
      name: "Formal Pant",
      price: 800,
      category:"Formal Shirt,Pant & Blazer",
      image: product7
    },
    {
      id: 8,
      name: "Formal Pant",
      price: 800,
      category:"Formal Shirt,Pant & Blazer",
      image: product8
    },
    {
      id: 9,
      name: "Formal Shirt",
      price: 800,
      category: "Formal Shirt,Pant & Blazer",
      image: product9
    },
    {
      id: 10,
      name: "Formal Shirt",
      price: 750,
      category: "Formal Shirt,Pant & Blazer",
      image: product10
    },
    {
      id: 11,
      name: "Formal Shirt",
      price: 1000,
      category: "Formal Shirt,Pant & Blazer",
      image: product11
    },
    {
      id: 12,
      name: "Formal Shirt",
      price: 900,
      category: "Formal Shirt,Pant & Blazer",
      image: product12
    },
    {
      id: 13,
      name: "Blazer",
      price: 2000,
      category: "Formal Shirt,Pant & Blazer",
      image: product13
    },
    {
      id: 14,
      name: "Blazer",
      price: 3500,
      category: "Formal Shirt,Pant & Blazer",
      image: product14
    },
    {
      id: 15,
      name: "Blazer",
      price: 3000,
      category: "Formal Shirt,Pant & Blazer",
      image: product15
    },
    {
      id: 16,
      name: "Blazer",
      price: 2500,
      category: "Formal Shirt,Pant & Blazer",
      image: product16
    },
    {
      id: 17,
      name: "Track Pant",
      price: 450,
      category: "SportsWear",
      image: product17
    },
    {
      id: 18,
      name: "Track Pant",
      price: 500,
      category: "SportsWear",
      image: product18
    },
    {
      id: 19,
      name: "Sports Tshirt",
      price: 300,
      category: "SportsWear",
      image: product19
    },
    {
      id: 20,
      name: "Sports Tshirt",
      price: 650,
      category: "SportsWear",
      image: product20
    },
    {
      id: 21,
      name: "Vasti Shirt",
      price: 800,
      category: "Traditional Wear",
      image: product21
    },
    {
      id: 22,
      name: "Pathani",
      price: 689,
      category: "Traditional Wear",
      image: product22
    },
    {
      id: 23,
      name: "Sherwani",
      price: 1300,
      category: "Traditional Wear",
      image: product23
    },
    {
      id: 24,
      name: "Sherwani",
      price: 2500 ,
      category: "Traditional Wear",
      image: product24
    },
    {
      id: 25,
      name: "Hoodies",
      price: 299,
      category: "Winter Cloths",
      image: product25
    },
    {
      id: 26,
      name: "Hoodies",
      price: 350 ,
      category: "Winter Cloths",
      image: product26
    },
    {
      id: 27,
      name: "Hoodies",
      price: 400 ,
      category: "Winter Cloths",
      image: product27
    },
    {
      id: 28,
      name: "Hoodies",
      price: 600,
      category: "Winter Cloths",
      image: product28
    },
    {
      id: 29,
      name: "Jeans",
      price: 500,
      category: "Jeans",
      image: product29
    },
    {
      id: 30,
      name: "Jeans",
      price: 550,
      category: "Jeans",
      image: product30
    },
    {
      id: 31,
      name: "Jeans",
      price: 600,
      category: "Jeans",
      image: product31
    },
    {
      id: 32,
      name: "Jeans",
      price: 750,
      category: "Jeans",
      image: product32
    },
  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "All" || product.category === category;
    return searchMatch && categoryMatch;
  });

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h1>SRK Shop</h1>
        <a href="#cart-section" className="cart-btn">
          Cart: {cart.length}
        </a>
      </nav>
       
      <section className="hero">
        <h2>Men's wear</h2>
        <p>Trendy and comfortable men’s wear for every occasion.</p>
      </section>

      <section className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Tshirt">Tshirt</option>
          <option value="Formal Shirt,Pant & Blazer">Formal Shirt,Pant & Blazer </option>
          <option value="SportsWear">Sportswear</option>
          <option value="Traditional Wear">Traditional Wear</option>
          <option value="Winter Cloths">Winter Cloths</option>
          <option value="Jeans">Jeans</option>
        </select>
      </section>

      <main className="main-container">
        <section className="products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </section>

        <aside className="cart" id="cart-section">
          <h2>Cart Items</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}

          <h3>Total: ₹{totalAmount}</h3>
        </aside>  
      </main>
      <section className="about-101">
      <div className="about-102">
        <div className="about-103">
          <h2>About Our Men's Wear Website</h2>
          <p>
            Welcome to our car buying platform. We help customers find the best
            new and used cars with trusted details, clear pricing, and easy
            booking options.
          </p>
          <p>
            latest men’s fashion collections including casual wear, 
            formal wear, party wear, sportswear, and accessories. Our 
            men’s wear website offers stylish, comfortable, and affordable 
            outfits for every occasion.
          </p>

          <button className="about-104">Explore Collection</button>
        </div>

        <div className="about-105">
          <img src={sakthi} alt="sakthi" className="about-106" />
          <img src={rani} alt="rani" className="about-107" />
          <img src={kannams} alt="kannams" className="about-108" />
        </div>
      </div>
    </section> 
      <footer className="footer">
  <p>© 2026 SRK Shop | Created by Sakthi,Kannams,Rani</p>
</footer>
      
    </div>
  );
}

export default App;
