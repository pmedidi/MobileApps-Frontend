// src/RouteChangeTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from './firebaseConfig'; // Import analytics from Firebase config
import { logEvent } from 'firebase/analytics';

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Log a page_view event whenever the route changes
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default RouteChangeTracker;
