import { useState } from "react";
import ListBooks from "./components/ListBooks";
import SlideshowWithAds from "./components/SideBarLeft";
import ContainerEmpty from "./components/Container";
import Footer from "./components/Footer";
import Aff from "./components/aff";
import "./App.css";
<div>
  <script type="text/javascript">
    var infolinks_pid = 22693; var infolinks_wsid = 0;
  </script>
  <script
    type="text/javascript"
    src="//resources.infolinks.com/js/infolinks_main.js"
  ></script>
</div>;
function App() {
  return (
    <div className="divfooter">
      <div>
        <div className="mainapp">
          <ListBooks />
          <ContainerEmpty />
          <div className="flexfooteraff">
            <Aff />
            <SlideshowWithAds />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
