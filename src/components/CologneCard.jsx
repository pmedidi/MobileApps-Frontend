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





import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CologneCard = ({ fragrance, onBookmark, isBookmarked, onClick }) => {
  return (
    <Box
      style={{
        width: '150px',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '20px', // Slightly rounder corners
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '250px',
        overflow: 'hidden',
        position: 'relative', // For positioning the bookmark button
        transition: 'transform 0.2s, box-shadow 0.2s', // Add hover effect transition
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0px 6px 14px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Circular Bookmark Button */}
      <IconButton
        onClick={() => onBookmark(fragrance)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: isBookmarked ? 'green' : '#fff',
          color: isBookmarked ? '#fff' : '#3f51b5',
          border: '1px solid #ccc',
          width: '32px',
          height: '32px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
      >
        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </IconButton>

      {/* Cologne Image */}
      <Box
        component="img"
        src={fragrance.thumbnail}
        alt={fragrance.title}
        height="100px"
        style={{
          objectFit: 'cover',
          borderRadius: '50%', // Circular image for a new visual style
          margin: '0.5rem 0',
          cursor: 'pointer',
          border: '2px solid #ddd', // Add border around the image
        }}
        onClick={onClick}
      />

      {/* Cologne Name */}
      <Box
        style={{
          textAlign: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: 'bold',
            color: '#333',
            fontSize: '0.9rem',
            whiteSpace: 'normal',
            overflowWrap: 'break-word', // Ensures text wraps
          }}
        >
          {fragrance.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CologneCard;

