import "./App.css";
import { Routes, Route } from "react-router-dom";
import Allabolag from "./components/Allabolag/Allabolag";
import LayOff from "./components/Layoff/LayOff";
import Sifted from "./components/Sifted/Sifted";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Allabolag />}></Route>
        <Route path="/layoff" element={<LayOff />}></Route>
        <Route path="/sifted" element={<Sifted />}></Route>
      </Routes>
    </>
  );
}

export default App;
