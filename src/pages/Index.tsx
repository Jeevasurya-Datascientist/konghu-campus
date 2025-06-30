import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import DepartmentsSection from '../components/DepartmentsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import InfrastructureSection from '../components/InfrastructureSection';
import PlacementSection from '../components/PlacementSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <DepartmentsSection />
      <QuickActionsSection />
      <InfrastructureSection />
      <PlacementSection />
      <Footer />
    </div>
  );
};

export default Index;
