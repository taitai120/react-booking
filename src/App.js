import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotel from "./pages/Hotel/Hotel";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<List />} />
                <Route path="/hotels/:id" element={<Hotel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
