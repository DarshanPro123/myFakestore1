import "./App.css";
import Home from "./components/Home/Home.jsx";
import Carts from "./components/Carts/Carts.jsx";
import AddTocart from "./components/AddTocart/AddTocart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/addTocart" element={<AddTocart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
