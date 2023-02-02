import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import ContactPage from "./Components/contactPage";
import AboutPage from "./Components/aboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
