import './App.css';
import Header from './component/common/head/Header';
import Cta from './component/cta/Cta';
import Faq from './component/faq/Faq';
import FWrapper from './component/features/FWrapper';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import RWrapper from './component/review/RWrapper';
import Servicesmain from './component/services/Servicesmain';
import SWrapper from './component/steps/SWrapper';
import Trustedby from './component/trusted/Trustedby';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Trustedby />
      <SWrapper />
      <Servicesmain />
      <FWrapper />
      <Cta />
      <RWrapper />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
