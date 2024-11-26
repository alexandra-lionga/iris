import './App.scss'
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
