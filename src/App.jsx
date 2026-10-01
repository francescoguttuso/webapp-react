import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import { GameDetail } from "./pages/GameDetail";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/details/:id" element={<GameDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
