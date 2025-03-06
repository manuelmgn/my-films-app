import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { fetchGenres } from "./genres";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Search />
    </div>
  );
}
export default App;
