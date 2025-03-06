import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyFilms from "./pages/MyFilms";

function App() {
  return (
    <div className="container mx-auto mb-5 px-2 sm:px-2 md:px-4 lg:px-8">
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
