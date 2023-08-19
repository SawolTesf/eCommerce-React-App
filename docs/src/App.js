import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
// Importing the ShopContextProvider component
import { ShopContextProvider } from "./context/shop-context";

// App component
function App() {

  return (
    <div className="App">
      {/* Wrapping the Router component with the ShopContextProvider */}
      {/* This provides the ShopContext to all child components of the Router */}
      <ShopContextProvider>
        {/* Setting up the router */}
        <Router>
          {/* Navbar component */}
          <Navbar />
          {/* Defining the routes */}
          <Routes>
            {/* Route for the Shop page */}
            <Route path="/" element={<Shop/>} />
            {/* Route for the Cart page */}
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// Exporting the App component
export default App;
