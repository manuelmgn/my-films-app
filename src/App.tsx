import React from "react";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import FilmList from "./component/FilmList";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <SearchBar />
      <FilmList
        name="Popular"
        sortBy="popularity.desc"
        minVotes={0}
        limit={8}
      />
      <FilmList
        name="Latest releases"
        sortBy="primary_release_date.desc"
        minVotes={10}
        limit={8}
      />
    </div>
  );
}
export default App;
