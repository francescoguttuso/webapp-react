import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { GameDetail } from "./pages/GameDetail";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
