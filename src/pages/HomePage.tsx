import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TreatmentModalities from "../components/TreatmentModalities";
import ClinicalTeam from "../components/ClinicalTeam";
import ClinicalResults from "../components/ClinicalResults";
import FacilityShowcase from "../components/FacilityShowcase";
import InsuranceLogistics from "../components/InsuranceLogistics";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import BottomTabBar from "../components/BottomTabBar";

interface HomePageProps {
  onContactClick: () => void;
  onNavigate: () => void;
}

const HomePage: React.FC<HomePageProps> = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={handleContactClick} />
      <Hero />
      <TreatmentModalities />
      <ClinicalTeam />
      <ClinicalResults />
      <FacilityShowcase onContactClick={handleContactClick} />
      <InsuranceLogistics onContactClick={handleContactClick} />
      <FAQ />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      <BottomTabBar
        onNavigate={function (page: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default HomePage;
