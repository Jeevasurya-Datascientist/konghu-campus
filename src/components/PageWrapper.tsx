import { useEffect } from 'react';
import { useLoading } from '@/hooks/LoadingContext'; // Uses the @ alias which is correct for your setup

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setLoading } = useLoading();

  // This effect runs only ONCE when the page component has mounted
  useEffect(() => {
    // Hide the loader
    setLoading(false);
  }, []); // Empty dependency array ensures it runs only on mount

  return <>{children}</>;
};

export default PageWrapper;