import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Repo } from "./pages/Repo";
import Repos from "./pages/Repos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repos />} />
        <Route path="/:name" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
