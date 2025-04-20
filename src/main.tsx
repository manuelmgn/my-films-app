import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import { FilmRatingProvider } from "./context/RatingContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <HashRouter>
    <FilmRatingProvider>
      <App />
    </FilmRatingProvider>
  </HashRouter>,
);
