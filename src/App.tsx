import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyFilms from "./pages/MyFilms";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-films" element={<MyFilms />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
