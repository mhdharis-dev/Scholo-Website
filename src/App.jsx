import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import ThreeTierSolution from './components/ThreeTierSolution';
import SecurityStack from './components/SecurityStack';
import Roadmap from './components/Roadmap';
import ContactSection from './components/ContactSection';
import DemoModal from './components/DemoModal';
import LegalModals from './components/LegalModals';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const handleOpenLegal = (modalType) => setLegalModal(modalType);
  const handleCloseLegal = () => setLegalModal(null);

  return (
    <div className="scholo-app">
      <Header onOpenDemo={handleOpenDemo} />
      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <ValuePillars />
        <ThreeTierSolution onOpenDemo={handleOpenDemo} />
        <SecurityStack />
        <Roadmap />
        <ContactSection />
      </main>
      <Footer onOpenLegal={handleOpenLegal} />
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
      <LegalModals activeModal={legalModal} onClose={handleCloseLegal} />
      <WhatsAppWidget />
    </div>
  );
}
