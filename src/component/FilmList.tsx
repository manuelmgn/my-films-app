import React from "react";
import FilmCard from "./FilmCard";

function FilmList({ films }: { films: any }) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {films.map((film: any) => FilmCard(film))}
    </div>
  );
}

export default FilmList;
