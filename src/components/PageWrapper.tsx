// src/components/PageWrapper.tsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // <-- IMPORT THIS HOOK
import { useLoading } from '@/hooks/LoadingContext';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLoading } = useLoading();
  const { pathname } = useLocation(); // <-- GET THE CURRENT URL PATH

  // This effect will now run EVERY TIME the URL path changes.
  useEffect(() => {
    // Hide the loader.
    setLoading(false);
  }, [pathname]); // <-- ADD 'pathname' TO THE DEPENDENCY ARRAY

  return <>{children}</>;
};

export default PageWrapper;