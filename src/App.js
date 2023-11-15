import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/common/head/Header';
import Home from './component/Home';
import Footer from './component/footer/Footer';
import Thankyou from './component/thankyou/Thankyou';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/thankyou' element={<Thankyou />} />
        </Routes>        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
