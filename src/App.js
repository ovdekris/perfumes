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
import Product from "./Product/Product"
import {useEffect, useState} from "react";
import NotFound from "./MainPage/NotFound/NotFound";
import Search from "./MainPage/Header/Search/Search";
import SearchResult from "./MainPage/SearchResults/SearchResult";
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
    const data=records.forman;
    const dataWoman=records.forwoman;
    const dataFragrances=records.homefragrances;
    const dataBodyMist=records.bodymist;
    const dataSignature=records.signature;
    const dataSale=records.sale;
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="sale" element={<Sale props={dataSale}/>}/>
              <Route path="forman" element={<ForMan props={data}/>}/>
              <Route path="forwoman" element={<ForWoman props={dataWoman}/>}/>
              <Route path="bodymist" element={<BodyMist props={dataBodyMist}/>}/>
              <Route path="homefragrances" element={<HomeFragrances props={dataFragrances}/>}/>
              <Route path="signature" element={<Signature props={dataSignature}/>}/>
              <Route path="likes" element={<Likes/>}/>
              <Route path="baskets" element={<Backets/>}/>
              <Route path="profile" element={<Profile props={data}/>}/>
              <Route path="/forwoman/:id" element={<Product props={records}/>}/>
              <Route path="/forman/:id" element={<Product props={records}/>}/>
              <Route path="/bestseller/:id" element={<Product props={records}/>}/>
              <Route path="/homefragrances/:id" element={<Product props={records}/>}/>
              <Route path="/bodymist/:id" element={<Product props={records}/>}/>
              <Route path="/signature/:id" element={<Product props={records}/>}/>
              <Route path="/sale/:id" element={<Product props={records}/>}/>
              <Route path="search" element={<SearchResult/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
