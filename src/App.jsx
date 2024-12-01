// // App.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   IconButton,
//   InputBase,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CologneCard from './components/CologneCard';
// import ProductModal from './components/ProductModal';
// import { auth } from './firebaseConfig';
// import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const App = () => {
//   const [allFragrances, setAllFragrances] = useState([]);
//   const [fragrances, setFragrances] = useState([]);
//   const [bookmarks, setBookmarks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredResults, setFilteredResults] = useState([]);
//   const [view, setView] = useState('explore');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [selectedFragrance, setSelectedFragrance] = useState(null);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const loadFragrances = async () => {
//       try {
//         const modules = import.meta.glob('./data/*.json');
//         const loadedFragrances = [];

//         for (const path in modules) {
//           const module = await modules[path]();
//           const fragrancesFromModule = module.default;
//           if (fragrancesFromModule.length > 0) {
//             // For each JSON file, pick the first fragrance
//             const cologneFragrance = fragrancesFromModule[0];
//             // Store the rest of the fragrances in a property
//             cologneFragrance.allFragrances = fragrancesFromModule;
//             loadedFragrances.push(cologneFragrance);
//           }
//         }

//         setAllFragrances(loadedFragrances);

//         const randomFragrances = loadedFragrances
//           .sort(() => 0.5 - Math.random())
//           .slice(0, 3);
//         setFragrances(randomFragrances);
//       } catch (error) {
//         console.error('Error loading fragrance data:', error);
//       }
//     };

//     loadFragrances();
//   }, []);

//   const handleSearch = (e) => {
//     if (e.key === 'Enter' || e.type === 'click') {
//       const query = searchTerm.toLowerCase();
//       const results = allFragrances.filter((fragrance) =>
//         fragrance.title.toLowerCase().includes(query)
//       );
//       setFilteredResults(results);
//     }
//   };

//   const addToBookmarks = (fragrance) => {
//     setBookmarks((prevBookmarks) => {
//       if (
//         prevBookmarks.find(
//           (item) => item.fragrance_id === fragrance.fragrance_id
//         )
//       ) {
//         // Remove from bookmarks if already bookmarked
//         return prevBookmarks.filter(
//           (item) => item.fragrance_id !== fragrance.fragrance_id
//         );
//       }
//       // Add to bookmarks if not already bookmarked
//       return [...prevBookmarks, fragrance];
//     });
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleNavigation = (page) => {
//     setView(page);
//     setDrawerOpen(false);
//   };

//   const handleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const handleSignOut = () => {
//     signOut(auth);
//   };

//   const openProductModal = (fragrance) => {
//     setSelectedFragrance(fragrance);
//   };

//   const closeProductModal = () => {
//     setSelectedFragrance(null);
//   };

//   return (
//     <Container
//       style={{ padding: '1rem', backgroundColor: '#B7AEDC', minHeight: '100vh' }}
//     >
//       {/* Header */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         mb={2}
//       >
//         <IconButton onClick={toggleDrawer(true)}>
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ fontWeight: 'bold', color: '#000' }}>
//           {view === 'explore' ? 'Scent Search' : 'Bookmarks'}
//         </Typography>
//         <IconButton onClick={user ? handleSignOut : handleSignIn}>
//           <AccountCircleIcon />
//         </IconButton>
//       </Box>

//       {/* Drawer for Navigation */}
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <Box
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//           style={{ width: 250 }}
//         >
//           <List>
//             <ListItem button onClick={() => handleNavigation('explore')}>
//               <ListItemText primary="Explore" />
//             </ListItem>
//             <Divider />
//             <ListItem button onClick={() => handleNavigation('bookmarks')}>
//               <ListItemText primary="Bookmarks" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Search Bar */}
//       {view === 'explore' && (
//         <Box
//           display="flex"
//           alignItems="center"
//           mt={2}
//           mb={3}
//           p={1}
//           style={{ backgroundColor: '#e0e0e0', borderRadius: '12px' }}
//         >
//           <SearchIcon style={{ color: '#9e9e9e' }} />
//           <InputBase
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyPress={handleSearch}
//             style={{ marginLeft: '8px', flex: 1, color: '#333' }}
//           />
//           <IconButton onClick={handleSearch}>
//             <SearchIcon />
//           </IconButton>
//         </Box>
//       )}

//       {/* Display Explore or Bookmarks Based on View */}
//       {view === 'explore' ? (
//         <>
//           <Typography
//             variant="h6"
//             gutterBottom
//             style={{ fontWeight: 'bold', color: '#333' }}
//           >
//             Explore
//           </Typography>
//           <Box display="flex" flexWrap="wrap">
//             {(searchTerm ? filteredResults : fragrances).map((fragrance) => (
//               <CologneCard
//                 key={fragrance.fragrance_id}
//                 fragrance={fragrance}
//                 onBookmark={addToBookmarks}
//                 isBookmarked={bookmarks.some(
//                   (item) => item.fragrance_id === fragrance.fragrance_id
//                 )}
//                 onClick={() => openProductModal(fragrance)}
//               />
//             ))}
//           </Box>
//         </>
//       ) : (
//         <>
//           <Typography
//             variant="h6"
//             gutterBottom
//             style={{ fontWeight: 'bold', color: '#333' }}
//           >
//             Bookmarks
//           </Typography>
//           <Box display="flex" flexWrap="wrap">
//             {bookmarks.length > 0 ? (
//               bookmarks.map((fragrance) => (
//                 <CologneCard
//                   key={fragrance.fragrance_id}
//                   fragrance={fragrance}
//                   onBookmark={addToBookmarks}
//                   isBookmarked={true}
//                   onClick={() => openProductModal(fragrance)}
//                 />
//               ))
//             ) : (
//               <Typography variant="body1" style={{ color: '#888' }}>
//                 No bookmarks yet.
//               </Typography>
//             )}
//           </Box>
//         </>
//       )}

//       {/* Product Modal */}
//       {selectedFragrance && (
//         <ProductModal
//           open={!!selectedFragrance}
//           onClose={closeProductModal}
//           fragrance={selectedFragrance}
//           user={user}
//         />
//       )}
//     </Container>
//   );
// };

// export default App;



// App.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CologneCard from './components/CologneCard';
import ProductModal from './components/ProductModal';
import { auth } from './firebaseConfig'; // Import auth from your Firebase config
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteChangeTracker from './RouteChangeTracker'; // Import the RouteChangeTracker
import Home from './pages/Home'; // Assume you have a Home component
import BookmarksPage from './pages/BookmarksPage'; // Assume you have a BookmarksPage component
import { analytics } from './firebaseConfig'; // Import analytics
import { logEvent } from 'firebase/analytics'; // Import logEvent

const App = () => {
  const [allFragrances, setAllFragrances] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFragrance, setSelectedFragrance] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const loadFragrances = async () => {
      try {
        const modules = import.meta.glob('./data/*.json');
        const loadedFragrances = [];

        for (const path in modules) {
          const module = await modules[path]();
          const fragrancesFromModule = module.default;
          if (fragrancesFromModule.length > 0) {
            // For each JSON file, pick the first fragrance
            const cologneFragrance = fragrancesFromModule[0];
            // Store the rest of the fragrances in a property
            cologneFragrance.allFragrances = fragrancesFromModule;
            loadedFragrances.push(cologneFragrance);
          }
        }

        setAllFragrances(loadedFragrances);

        const randomFragrances = loadedFragrances
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setFragrances(randomFragrances);
      } catch (error) {
        console.error('Error loading fragrance data:', error);
      }
    };

    loadFragrances();
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const query = searchTerm.toLowerCase();
      const results = allFragrances.filter((fragrance) =>
        fragrance.title.toLowerCase().includes(query)
      );
      setFilteredResults(results);

      // Log search event
      logEvent(analytics, 'search', {
        search_term: searchTerm,
      });
    }
  };

  const addToBookmarks = (fragrance) => {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = prevBookmarks.find(
        (item) => item.fragrance_id === fragrance.fragrance_id
      );

      // Log bookmark event
      logEvent(
        analytics,
        isBookmarked ? 'remove_bookmark' : 'add_bookmark',
        {
          fragrance_id: fragrance.fragrance_id,
          title: fragrance.title,
        }
      );

      if (isBookmarked) {
        // Remove from bookmarks if already bookmarked
        return prevBookmarks.filter(
          (item) => item.fragrance_id !== fragrance.fragrance_id
        );
      }
      // Add to bookmarks if not already bookmarked
      return [...prevBookmarks, fragrance];
    });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (page) => {
    // Log navigation event
    logEvent(analytics, 'navigation', {
      page,
    });
  };

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        // Log sign-in event
        logEvent(analytics, 'login', {
          method: 'Google',
        });
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Log sign-out event
        logEvent(analytics, 'logout');
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  const openProductModal = (fragrance) => {
    setSelectedFragrance(fragrance);

    // Log opening of product modal
    logEvent(analytics, 'select_content', {
      content_type: 'fragrance',
      item_id: fragrance.fragrance_id,
    });
  };

  const closeProductModal = () => {
    setSelectedFragrance(null);
  };

  return (
    <Router>
      <RouteChangeTracker />
      <Container
        style={{ padding: '1rem', backgroundColor: '#B7AEDC', minHeight: '100vh' }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#000' }}>
            Scent Search
          </Typography>
          <IconButton onClick={user ? handleSignOut : handleSignIn}>
            <AccountCircleIcon />
          </IconButton>
        </Box>

        {/* Drawer for Navigation */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
          >
            <List>
              <ListItem
                button
                onClick={() => {
                  handleNavigation('explore');
                }}
                component="a"
                href="/"
              >
                <ListItemText primary="Explore" />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  handleNavigation('bookmarks');
                }}
                component="a"
                href="/bookmarks"
              >
                <ListItemText primary="Bookmarks" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Search Bar */}
                <Box
                  display="flex"
                  alignItems="center"
                  mt={2}
                  mb={3}
                  p={1}
                  style={{ backgroundColor: '#e0e0e0', borderRadius: '12px' }}
                >
                  <SearchIcon style={{ color: '#9e9e9e' }} />
                  <InputBase
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleSearch}
                    style={{ marginLeft: '8px', flex: 1, color: '#333' }}
                  />
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </Box>

                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontWeight: 'bold', color: '#333' }}
                >
                  Explore
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {(searchTerm ? filteredResults : fragrances).map((fragrance) => (
                    <CologneCard
                      key={fragrance.fragrance_id}
                      fragrance={fragrance}
                      onBookmark={addToBookmarks}
                      isBookmarked={bookmarks.some(
                        (item) => item.fragrance_id === fragrance.fragrance_id
                      )}
                      onClick={() => openProductModal(fragrance)}
                    />
                  ))}
                </Box>
              </>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontWeight: 'bold', color: '#333' }}
                >
                  Bookmarks
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {bookmarks.length > 0 ? (
                    bookmarks.map((fragrance) => (
                      <CologneCard
                        key={fragrance.fragrance_id}
                        fragrance={fragrance}
                        onBookmark={addToBookmarks}
                        isBookmarked={true}
                        onClick={() => openProductModal(fragrance)}
                      />
                    ))
                  ) : (
                    <Typography variant="body1" style={{ color: '#888' }}>
                      No bookmarks yet.
                    </Typography>
                  )}
                </Box>
              </>
            }
          />
        </Routes>

        {/* Product Modal */}
        {selectedFragrance && (
          <ProductModal
            open={!!selectedFragrance}
            onClose={closeProductModal}
            fragrance={selectedFragrance}
            user={user}
          />
        )}
      </Container>
    </Router>
  );
};

export default App;
