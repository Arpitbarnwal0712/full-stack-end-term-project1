
import { useEffect, useState } from "react";
import { ShoppingCart, Search, Store } from "lucide-react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch products from Express API
    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/products"
            );

            const data = await response.json();
            setProducts(data);

        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    {products.map((product) => (
      <div key={product._id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}

    useEffect(() => {
        fetchProducts();
    }, []);

    // Add product to cart
    const addToCart = (product) => {
        setCart((previousCart) => {
            const existing = previousCart.find(
                item => item._id === product._id
            );

            if (existing) {
                return previousCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...previousCart, {
                ...product,
                quantity: 1
            }];
        });
    };

    // Calculate cart total
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Search products
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">

            <nav className="navbar">
                <h2><Store size={25} /> ShopZone</h2>

                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="cart-info">
                    <ShoppingCart size={23} />
                    Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                </div>
            </nav>

            <section className="hero">
                <h1>Welcome to ShopZone</h1>
                <p>Find your favourite products at amazing prices.</p>
            </section>

            <main className="container">

                <h2>Our Products</h2>

                <div className="product-grid">

                    {filteredProducts.map(product => (

                        <div className="product-card" key={product._id}>

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <div className="product-details">

                                <span className="category">
                                    {product.category}
                                </span>

                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <h2>₹{product.price.toLocaleString("en-IN")}</h2>

                                <p>Stock: {product.stock}</p>

                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={product.stock <= 0}
                                >
                                    <ShoppingCart size={17} />
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {filteredProducts.length === 0 && (
                    <p className="empty">No products found.</p>
                )}

                <section className="cart-section">
                    <h2>Your Shopping Cart</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cart.map(item => (
                                <div className="cart-item" key={item._id}>
                                    <span>
                                        {item.name} × {item.quantity}
                                    </span>

                                    <span>
                                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                    </span>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            setCart(cart.filter(
                                                p => p._id !== item._id
                                            ))
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                            <h3>
                                Total: ₹{total.toLocaleString("en-IN")}
                            </h3>
                        </>
                    )}
                </section>

            </main>

            <footer>
                <p>© 2026 ShopZone. All Rights Reserved.</p>
            </footer>

        </div>
    );
}

export default App;
