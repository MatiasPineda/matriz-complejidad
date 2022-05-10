// import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../views/HomeView/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
