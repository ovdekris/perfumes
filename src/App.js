import './App.css';
import Main from "./MainPage/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sale from "./MainPage/Sale/Sale";
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="sale" element={<Sale/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
