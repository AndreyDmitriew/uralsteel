import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import News from '../components/News/News';
import StayAhead from '../components/StayAhead/StayAhead';
import Highlights from '../components/Highlights/Highlights';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <News />
        <StayAhead />
        <Highlights />
      </main>
      <Footer />
    </>
  );
}
