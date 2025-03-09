import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyFilms from "./pages/MyFilms";
import { GenresProvider } from "./context/GenresContext";
import { FilmRatingProvider } from "./context/RatingContext";

function App() {
  return (
    <FilmRatingProvider>
      <div className="container mx-auto mb-5 px-2 sm:px-2 md:px-4 lg:px-8">
        <NavBar />
        <GenresProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-films" element={<MyFilms />} />
            </Routes>
          </main>
        </GenresProvider>
      </div>
    </FilmRatingProvider>
  );
}
export default App;
