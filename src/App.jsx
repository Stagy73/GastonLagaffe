import { useState } from "react";
import ListBooks from "./components/ListBooks";
import SlideshowWithAds from "./components/SideBarLeft";
import ContainerEmpty from "./components/Container";
import "./App.css";

function App() {
  return (
    <div>
      <div className="mainapp">
        <ListBooks />
        <ContainerEmpty />
        <div>
          <SlideshowWithAds />
        </div>
      </div>
    </div>
  );
}

export default App;
