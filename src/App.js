import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allappliances from "./components/Allappliances/Allappliances";
import SingleAppliances from "./components/SingleAppliances/SingleAppliances";
import "./sass/style.scss";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Allappliances />} />
           <Route path="/details/:serialNo" element={<SingleAppliances />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
