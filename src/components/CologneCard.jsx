// // src/components/CologneCard.jsx
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// // List of credible source keywords
// const credibleKeywords = ['Amazon', "Macy's", 'Walmart', 'Nordstrom', 'Sephora', 'Ulta'];

// const CologneCard = ({ fragrance, onBookmark, isBookmarked, onClick }) => {
//   // Check if the fragrance source contains any credible keyword
//   const isCredible = credibleKeywords.some((keyword) => fragrance.source.includes(keyword));

//   return (
//     <Box
//       style={{
//         width: '150px',
//         padding: '1rem',
//         backgroundColor: '#fff',
//         borderRadius: '16px',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//         margin: '0.5rem',
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         height: '250px', // Adjust as needed
//         overflow: 'hidden' // Ensure no overflow
//       }}
//       onClick={onClick}
//     >
//       <a href={fragrance.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
//         <Box
//           component="img"
//           src={fragrance.thumbnail}
//           alt={fragrance.title}
//           height="100px"
//           style={{ objectFit: 'cover', borderRadius: '8px', marginBottom: '0.5rem' }}
//         />
//       </a>
//       <Typography
//         variant="subtitle1"
//         style={{
//           fontWeight: 'bold',
//           color: '#333',
//           fontSize: '0.9rem',
//           textOverflow: 'ellipsis',
//           whiteSpace: 'nowrap',
//           overflow: 'hidden',
//         }}
//       >
//         {fragrance.title}
//       </Typography>
//       <Typography
//         variant="body2"
//         color="textSecondary"
//         style={{
//           fontSize: '0.75rem',
//           textOverflow: 'ellipsis',
//           whiteSpace: 'nowrap',
//           overflow: 'hidden',
//         }}
//       >
//         {fragrance.source}
//       </Typography>
//       <Typography
//         variant="body2"
//         style={{
//           fontWeight: 'bold',
//           color: '#333',
//           fontSize: '0.85rem',
//           marginTop: '0.5rem',
//           textOverflow: 'ellipsis',
//           whiteSpace: 'nowrap',
//           overflow: 'hidden',
//         }}
//       >
//         {fragrance.price}
//       </Typography>

//       {isCredible && (
//         <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
//           <CheckCircleIcon style={{ color: '#4caf50', fontSize: '1rem', marginRight: '4px' }} />
//           <Typography variant="body2" style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '0.8rem' }}>
//             Verified
//           </Typography>
//         </Box>
//       )}

//       {onBookmark && (
//         <Button
//           onClick={(e) => {
//             e.stopPropagation();
//             onBookmark(fragrance);
//           }}
//           variant="contained"
//           style={{
//             marginTop: '0.5rem',
//             fontWeight: 'bold',
//             backgroundColor: isBookmarked ? 'green' : '#3f51b5',
//             color: 'white',
//             fontSize: '0.75rem',
//           }}
//           disabled={isBookmarked}
//         >
//           {isBookmarked ? 'Bookmarked' : 'Bookmark'}
//         </Button>
//       )}
//     </Box>
//   );
// };

// export default CologneCard;






// src/components/CologneCard.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CologneCard = ({ fragrance, onBookmark, isBookmarked, onClick }) => {
  return (
    <Box
      style={{
        width: '150px',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '250px',
        overflow: 'hidden',
      }}
    >
      {/* Cologne Name at the Top */}
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: 'bold',
          color: '#333',
          fontSize: '0.9rem',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {fragrance.title}
      </Typography>

      {/* Cologne Image */}
      <Box
        component="img"
        src={fragrance.thumbnail}
        alt={fragrance.title}
        height="100px"
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          margin: '0.5rem 0',
          cursor: 'pointer',
        }}
        onClick={onClick}
      />

      {/* Bookmark Button */}
      {onBookmark && (
        <Button
          onClick={() => onBookmark(fragrance)}
          variant="contained"
          style={{
            marginTop: '0.5rem',
            fontWeight: 'bold',
            backgroundColor: isBookmarked ? 'green' : '#3f51b5',
            color: 'white',
            fontSize: '0.75rem',
          }}
        >
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </Button>
      )}
    </Box>
  );
};

export default CologneCard;