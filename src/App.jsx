import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./pages/LandingPage/landingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound/pageNotFound";

function App() {

  return (
    //create router in 3 path 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
