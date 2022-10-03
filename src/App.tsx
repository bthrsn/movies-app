import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
