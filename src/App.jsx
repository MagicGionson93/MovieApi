import "./css/App.css";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/movieapi" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/singlemovie/:id" element={<SingleMovie />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
