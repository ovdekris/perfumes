import './App.css';
import Main from "./MainPage/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sale from "./MainPage/Sale/Sale";
import ForMan from "./MainPage/ForMan/ForMan";
import ForWoman from "./MainPage/ForWoman/ForWoman";
import BodyMist from "./MainPage/BodyMist/BodyMist";
import HomeFragrances from "./MainPage/HomeFragrances/HomeFragrances";
import Signature from "./MainPage/Signature/Signature";
import Backets from "./MainPage/Header/Backets/Backets";
import Profile from "./MainPage/Header/Profile/Profile";
import Likes from "./MainPage/Header/Likes/Likes";
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
              <Route path="likes" element={<Likes/>}/>
              <Route path="backets" element={<Backets/>}/>
              <Route path="profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
