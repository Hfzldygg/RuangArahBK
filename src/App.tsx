import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CounselingBookingPage } from './pages/CounselingBookingPage';
import { RuangTanyaPage } from './pages/RuangTanyaPage';
import { MasaDepanPage } from './pages/MasaDepanPage';
import { PerpustakaanPage } from './pages/PerpustakaanPage';
import { PrivasiEtikaPage } from './pages/PrivasiEtikaPage';
import { TentangPage } from './pages/TentangPage';
import { ArticleModal } from './components/ArticleModal';
import { PetaArahkuModal } from './components/PetaArahkuModal';
import { AcademicReportModal } from './components/AcademicReportModal';
import { Page, BKCategory, Article } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('beranda');
  const [selectedCategory, setSelectedCategory] = useState<BKCategory>('pribadi');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [isPetaArahkuOpen, setIsPetaArahkuOpen] = useState(false);
  const [isAcademicReportOpen, setIsAcademicReportOpen] = useState(false);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleSelectCategory = (cat: BKCategory) => {
    setSelectedCategory(cat);
  };

  const handleGoToCounseling = (category: BKCategory) => {
    setSelectedCategory(category);
    setCurrentPage('konseling');
  };

  const handleOpenArticle = (article: Article) => {
    setActiveArticle(article);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-100 selection:text-sky-900 font-sans">
      {/* Main Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPetaArahku={() => setIsPetaArahkuOpen(true)}
        onOpenAcademicReport={() => setIsAcademicReportOpen(true)}
      />

      {/* Page Routing Body */}
      <main className="flex-1">
        {currentPage === 'beranda' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
            onOpenArticle={handleOpenArticle}
            onOpenPetaArahku={() => setIsPetaArahkuOpen(true)}
            onOpenAcademicReport={() => setIsAcademicReportOpen(true)}
          />
        )}

        {currentPage === 'layanan' && (
          <ServicesPage
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            onGoToCounseling={handleGoToCounseling}
            onOpenArticle={handleOpenArticle}
          />
        )}

        {currentPage === 'konseling' && (
          <CounselingBookingPage initialCategory={selectedCategory} />
        )}

        {currentPage === 'tanya' && (
          <RuangTanyaPage
            onNavigate={handleNavigate}
            onGoToCounseling={handleGoToCounseling}
          />
        )}

        {currentPage === 'masa-depan' && (
          <MasaDepanPage
            onNavigate={handleNavigate}
            onGoToCounseling={handleGoToCounseling}
          />
        )}

        {currentPage === 'perpustakaan' && (
          <PerpustakaanPage onOpenArticle={handleOpenArticle} />
        )}

        {currentPage === 'privasi' && <PrivasiEtikaPage />}

        {currentPage === 'tentang' && (
          <TentangPage
            onNavigate={handleNavigate}
            onOpenAcademicReport={() => setIsAcademicReportOpen(true)}
            onOpenPetaArahku={() => setIsPetaArahkuOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAcademicReport={() => setIsAcademicReportOpen(true)}
        onOpenPetaArahku={() => setIsPetaArahkuOpen(true)}
      />

      {/* Interactive Global Modals */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onConsultationRequest={(cat) => {
          setActiveArticle(null);
          handleGoToCounseling(cat);
        }}
      />

      <PetaArahkuModal
        isOpen={isPetaArahkuOpen}
        onClose={() => setIsPetaArahkuOpen(false)}
        onSelectArticle={(art) => {
          setIsPetaArahkuOpen(false);
          setActiveArticle(art);
        }}
        onGoToCounseling={(cat) => {
          setIsPetaArahkuOpen(false);
          handleGoToCounseling(cat);
        }}
      />

      <AcademicReportModal
        isOpen={isAcademicReportOpen}
        onClose={() => setIsAcademicReportOpen(false)}
      />
    </div>
  );
}
