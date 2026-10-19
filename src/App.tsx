import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedEnterprises } from './components/TrustedEnterprises';
import { CustomerPainPoints } from './components/CustomerPainPoints';
import { FlowchartSection } from './components/FlowchartSection';
import { TopReasons } from './components/TopReasons';
import { CoreItsmCards } from './components/CoreItsmCards';
import { FeatureSpotlights } from './components/FeatureSpotlights';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { WhoWeHelp } from './components/WhoWeHelp';
import { AccoladesMilestones } from './components/AccoladesMilestones';
import { DemoScheduler } from './components/DemoScheduler';
import { FaqSection } from './components/FaqSection';
import { CloudBanner } from './components/CloudBanner';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { FaveoServiceDeskApp } from './components/FaveoServiceDeskApp';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isAppLaunched, setIsAppLaunched] = useState(false);

  const scrollToDemo = () => {
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isAppLaunched) {
    return <FaveoServiceDeskApp onBackToMarketing={() => setIsAppLaunched(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenDemoModal={scrollToDemo}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onLaunchApp={() => setIsAppLaunched(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section: Core Proposition & Direct Trial Onboarding */}
        <Hero
          onOpenDemo={scrollToDemo}
          onOpenTrial={() => setIsTrialModalOpen(true)}
        />

        {/* 2. Social Proof Marquee: 10,000+ Enterprise Logos */}
        <TrustedEnterprises />

        {/* 3. Customer Pain Points vs Faveo Solution */}
        <CustomerPainPoints onOpenDemo={scrollToDemo} />

        {/* 4. Core Solutions: Foundational ITSM Capabilities */}
        <CoreItsmCards onOpenDemo={scrollToDemo} />

        {/* 4. Product Deep-Dives: Interactive Feature Consoles (CMDB, Catalog, SLAs, Reports) */}
        <FeatureSpotlights onOpenDemo={scrollToDemo} />

        {/* 5. Proven Track Record: Milestones Banner & Customer Stories */}
        <AccoladesMilestones />

        {/* 6. Conversion Engine: Interactive Live Demo Scheduler */}
        <DemoScheduler />

        {/* 7. Overcoming Objections: Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Final Call-to-Action: Cloud & On-Premise 14-Day Free Trial Banner */}
        <CloudBanner onOpenTrial={() => setIsTrialModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Free Trial Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </div>
  );
}
