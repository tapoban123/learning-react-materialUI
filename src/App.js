import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
