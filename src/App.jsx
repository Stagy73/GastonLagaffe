import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import Navbar from "./components/Navbar";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
//import SlideshowWithAds from "./components/SideBarLeft";
//import ContainerEmpty from "./components/Container";
import Footer from "./components/Footer";
//import FeedPosts from "./components/aff";
import "./App.css";
import "./components/Navbar.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ListBooks />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ListBooks />
      <Footer />
    </div>
  );
}

export default App;
