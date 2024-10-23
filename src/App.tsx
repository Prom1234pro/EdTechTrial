import Navbar from './components/NavBar/NavBar.tsx';
import Hero from './components/Hero/Hero.tsx';
import TrustedSection from './components/TrustedSection/TrustedSection.tsx';
import CallActionOne from './components/CallActionOne/CallActionOne.tsx';
import CallActionTwo from './components/CallActionTwo/CallActionTwo.tsx';
import Features from './components/Features/Features.tsx';
import Plans from './components/Plans/Plans.tsx';
import HowItWorks from './components/HowItWorks/HowItWorks.tsx';
import FaqSection from './components/FaqSection/FaqSection.tsx';
import TakeControl from './components/TakeControl/TakeControl.tsx';
import Footer from './components/Footer//Footer.tsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedSection />
      <CallActionOne />
      <Features />
      <CallActionTwo />
      <Plans />
      <HowItWorks />
      <FaqSection />
      <TakeControl />
      <Footer />
    </>
  );
}

export default App;
