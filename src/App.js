import {  Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import './index.css';
import { Archive } from "./pages/Archive";
import { Important } from "./pages/important";
import { Bin } from "./pages/for_bin";
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/important" element={<Important />} />
        <Route path="/bin" element={<Bin/>}/>
      </Routes>
   
  );
}

export default App;
