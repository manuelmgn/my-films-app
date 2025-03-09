import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilmRatingProvider } from "./context/RatingContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <FilmRatingProvider>
      <App />
    </FilmRatingProvider>
  </BrowserRouter>,
);
