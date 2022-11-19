import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HotelPage from "./pages/HotelPage/HotelPage";
import HotelDetail from "./pages/HotelDetail/HotelDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotels" element={<HotelPage />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
