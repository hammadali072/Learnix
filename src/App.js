import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import LandingPage from './pages/landing-page';
import LandingPage2 from './pages/landing-page2';
import LandingPage3 from './pages/landing-page3';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/homepage2' element={<LandingPage2 />} />
        <Route path='/homepage3' element={<LandingPage3 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
