import "./css/App.css";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter basename="/movieapi">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/singlemovie/:id" element={<SingleMovie />} />
          </Routes>
        </main>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
