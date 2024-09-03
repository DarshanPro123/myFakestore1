import "./App.css";
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
            <Route path="/" element={<Carts />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/addTocart" element={<AddTocart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
