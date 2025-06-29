// src/components/PageWrapper.tsx

import { useEffect } from 'react';
import { useLoading } from '@/hooks/LoadingContext';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLoading } = useLoading();

  // This effect runs only when the component (and its children) has mounted.
  useEffect(() => {
    // Hide the loader.
    setLoading(false);
  }, [setLoading]);

  // Render the actual page content.
  return <>{children}</>;
};

export default PageWrapper;