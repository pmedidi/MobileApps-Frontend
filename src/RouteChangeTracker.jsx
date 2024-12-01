// RouteChangeTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from './firebaseConfig'; // Ensure this path is correct
import { logEvent } from 'firebase/analytics';

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default RouteChangeTracker;