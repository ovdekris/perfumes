import './App.css';
import Main from "./MainPage/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sale from "./MainPage/Sale/Sale";
import ForMan from "./MainPage/ForMan/ForMan";
import ForWoman from "./MainPage/ForWoman/ForWoman";
import BodyMist from "./MainPage/BodyMist/BodyMist";
import HomeFragrances from "./MainPage/HomeFragrances/HomeFragrances";
import Signature from "./MainPage/Signature/Signature";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="sale" element={<Sale/>}/>
              <Route path="forman" element={<ForMan/>}/>
              <Route path="forwoman" element={<ForWoman/>}/>
              <Route path="bodymist" element={<BodyMist/>}/>
              <Route path="homefragrances" element={<HomeFragrances/>}/>
              <Route path="signature" element={<Signature/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
