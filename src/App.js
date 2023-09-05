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
import {useEffect, useState} from "react";
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const url='http://localhost:5000/data';
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setRecords(data);
                setIsLoading(false); // Установить флаг загрузки в false после получения данных
            })
            .catch(err => console.log(err))
    }, []);
    if (isLoading) {
        return <p>Loading...</p>; // Показать индикатор загрузки
    }
    const data=records.forMen;
    const dataWoman=records.forWoman;
    const dataFragrances=records.homeFragrances;
    const dataBodyMist=records.bodyMist;
    const dataBestseller=records.bestseller;
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="sale" element={<Sale/>}/>
              <Route path="forman" element={<ForMan props={data}/>}/>
              <Route path="forwoman" element={<ForWoman props={dataWoman}/>}/>
              <Route path="bodymist" element={<BodyMist props={dataBodyMist}/>}/>
              <Route path="homefragrances" element={<HomeFragrances props={dataFragrances}/>}/>
              <Route path="signature" element={<Signature/>}/>
              <Route path="likes" element={<Likes/>}/>
              <Route path="backets" element={<Backets/>}/>
              <Route path="profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
