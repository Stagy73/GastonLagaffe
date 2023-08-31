import { useState } from "react";
import ListBooks from "./components/ListBooks";
import SlideshowWithAds from "./components/SideBarLeft";
import ContainerEmpty from "./components/Container";
import Footer from "./components/Footer";
import FeedPosts from "./components/aff";
import "./App.css";
<div></div>;
function App() {
  return (
    <div className="divfooter">
      <div>
        <div className="mainapp">
          <ListBooks />
          <ContainerEmpty />
          <div className="flexfooteraff">
            <SlideshowWithAds />
          </div>
        </div>
      </div>
      <FeedPosts />
      <Footer />
    </div>
  );
}

export default App;
