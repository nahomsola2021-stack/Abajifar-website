import React, { createContext, useContext, useState, useEffect } from 'react';

export type RouteType =
  | 'home'
  | 'destinations'
  | 'destination-detail'
  | 'tours'
  | 'tour-detail'
  | 'about'
  | 'contact';

interface RouterContextType {
  currentPath: string;
  route: RouteType;
  slug: string | null;
  navigate: (path: string) => void;
  openInquiryModal: (defaultTourOrDest?: string) => void;
  closeInquiryModal: () => void;
  isInquiryModalOpen: boolean;
  selectedTourForInquiry: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string): { route: RouteType; slug: string | null } {
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  if (cleanPath === '/' || cleanPath === '') {
    return { route: 'home', slug: null };
  }
  if (cleanPath === '/destinations') {
    return { route: 'destinations', slug: null };
  }
  if (cleanPath.startsWith('/destinations/')) {
    const slug = cleanPath.replace('/destinations/', '');
    return { route: 'destination-detail', slug };
  }
  if (cleanPath === '/tours') {
    return { route: 'tours', slug: null };
  }
  if (cleanPath.startsWith('/tours/')) {
    const slug = cleanPath.replace('/tours/', '');
    return { route: 'tour-detail', slug };
  }
  if (cleanPath === '/about') {
    return { route: 'about', slug: null };
  }
  if (cleanPath === '/contact') {
    return { route: 'contact', slug: null };
  }

  // Fallback
  return { route: 'home', slug: null };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [routeInfo, setRouteInfo] = useState(() => parsePath(window.location.pathname || '/'));
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedTourForInquiry, setSelectedTourForInquiry] = useState('');

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    setRouteInfo(parsePath(path));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      setRouteInfo(parsePath(path));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openInquiryModal = (defaultTourOrDest: string = '') => {
    setSelectedTourForInquiry(defaultTourOrDest);
    setIsInquiryModalOpen(true);
  };

  const closeInquiryModal = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        route: routeInfo.route,
        slug: routeInfo.slug,
        navigate,
        openInquiryModal,
        closeInquiryModal,
        isInquiryModalOpen,
        selectedTourForInquiry
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
