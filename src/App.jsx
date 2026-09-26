import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import ThreeTierSolution from './components/ThreeTierSolution';
import Roadmap from './components/Roadmap';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import DemoModal from './components/DemoModal';
import SuccessModal from './components/SuccessModal';
import LegalModals from './components/LegalModals';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

function normalizePath(pathname) {
  let path = (pathname || '/').toLowerCase().trim();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [successModalState, setSuccessModalState] = useState({ isOpen: false, refId: '' });
  const [legalModal, setLegalModal] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path, hash = '') => {
    const normPath = normalizePath(path);
    const fullUrl = hash ? `${normPath}${hash}` : normPath;
    window.history.pushState({}, '', fullUrl);
    setCurrentPath(normPath);

    if (hash) {
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          const offsetTop = elem.offsetTop - 85;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const handleSuccess = (refId) => {
    setSuccessModalState({ isOpen: true, refId });
  };

  const handleCloseSuccess = () => {
    setSuccessModalState({ isOpen: false, refId: '' });
  };

  const handleOpenLegal = (modalType) => setLegalModal(modalType);
  const handleCloseLegal = () => setLegalModal(null);

  const isPrivacyPage =
    currentPath === '/privacy-policy' ||
    currentPath === '/privacy' ||
    currentPath.includes('privacy');

  return (
    <div className="scholo-app">
      {!isPrivacyPage && (
        <Header
          onOpenDemo={handleOpenDemo}
          onNavigate={navigateTo}
          currentPath={currentPath}
        />
      )}
      <main>
        {isPrivacyPage ? (
          <PrivacyPolicyPage onNavigate={navigateTo} onOpenDemo={handleOpenDemo} />
        ) : (
          <>
            <Hero onOpenDemo={handleOpenDemo} />
            <ValuePillars />
            <ThreeTierSolution onOpenDemo={handleOpenDemo} />
            <Roadmap />
            <AboutSection />
            <Testimonials />
            <FAQSection />
            <ContactSection onSuccess={handleSuccess} />
          </>
        )}
      </main>
      <Footer onOpenLegal={handleOpenLegal} onNavigate={navigateTo} />
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} onSuccess={handleSuccess} />
      <SuccessModal
        isOpen={successModalState.isOpen}
        onClose={handleCloseSuccess}
        refId={successModalState.refId}
      />
      <LegalModals activeModal={legalModal} onClose={handleCloseLegal} onNavigate={navigateTo} />
      <WhatsAppWidget />
    </div>
  );
}

