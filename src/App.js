import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import ContactPage from "./Components/contactPage";
import AboutPage from "./Components/aboutPage";
import Buy from "./Components/buyItems";
import Sell from "./Components/sellItem";
import Cart from "./Components/cartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/buyItems" element={<Buy />}></Route>
      <Route path="/sellItems" element={<Sell />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
