// src/components/PageWrapper.tsx (Corrected)

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/hooks/LoadingContext';
import Header from './Header'; // <<< ADD THIS IMPORT
import Footer from './Footer'; // <<< ADD THIS IMPORT

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLoading } = useLoading();
  const { pathname } = useLocation();

  useEffect(() => {
    // This logic is correct and we'll keep it.
    setLoading(false);
  }, [pathname]);

  // <<< WRAP THE CHILDREN WITH THE LAYOUT STRUCTURE >>>
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;