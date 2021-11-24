import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import NavBar from './components/NavBar';
import SrList from './pages/SrList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post/:srName/:postId" element={<DetailPage />} />
        <Route path="/srList" element={<SrList />} />
      </Routes>
      <footer>
        <NavBar />
      </footer>
    </Router>
  );
}

export default App;
