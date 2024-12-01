// // src/components/ProductModal.jsx
// import React, { useState, useEffect } from 'react';
// import { Modal, Box, Typography, Button, TextField, IconButton } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';

// const credibleKeywords = ['Amazon', "Macy's", 'Walmart', 'Nordstrom', 'Sephora', 'Ulta'];

// const ProductModal = ({ open, onClose, fragrance, user }) => {
//   const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
//   const [commentsMap, setCommentsMap] = useState({});
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     // Reset selected option and new comment when modal opens/closes
//     if (open) {
//       setSelectedOptionIndex(null);
//       setNewComment('');
//     }
//   }, [open]);

//   // Handle adding a new comment
//   const handleAddComment = () => {
//     if (newComment.trim() === '') return;

//     const selectedOption = fragrance.allFragrances[selectedOptionIndex];
//     const optionKey = selectedOption.link;

//     // Create a new comment object
//     const newCommentObj = {
//       id: Date.now(), // Using timestamp as a temporary ID
//       text: newComment,
//       upvotes: 0,
//       downvotes: 0,
//       userId: user ? user.uid : 'anonymous',
//       userName: user ? user.displayName || 'Anonymous' : 'Anonymous',
//     };

//     // Update comments map
//     setCommentsMap((prevCommentsMap) => {
//       const existingComments = prevCommentsMap[optionKey] || [];
//       return {
//         ...prevCommentsMap,
//         [optionKey]: [...existingComments, newCommentObj],
//       };
//     });

//     setNewComment('');
//   };

//   // Handle upvoting a comment
//   const handleUpvote = (optionKey, commentId) => {
//     setCommentsMap((prevCommentsMap) => {
//       const updatedComments = prevCommentsMap[optionKey].map((comment) => {
//         if (comment.id === commentId) {
//           return { ...comment, upvotes: comment.upvotes + 1 };
//         }
//         return comment;
//       });
//       return { ...prevCommentsMap, [optionKey]: updatedComments };
//     });
//   };

//   // Handle downvoting a comment
//   const handleDownvote = (optionKey, commentId) => {
//     setCommentsMap((prevCommentsMap) => {
//       const updatedComments = prevCommentsMap[optionKey].map((comment) => {
//         if (comment.id === commentId) {
//           return { ...comment, downvotes: comment.downvotes + 1 };
//         }
//         return comment;
//       });
//       return { ...prevCommentsMap, [optionKey]: updatedComments };
//     });
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         style={{
//           backgroundColor: 'white',
//           padding: '1rem',
//           maxWidth: '500px',
//           margin: '50px auto',
//           borderRadius: '8px',
//           maxHeight: '80vh',
//           overflowY: 'auto',
//         }}
//       >
//         <Typography
//           variant="h6"
//           style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}
//         >
//           {fragrance.title}
//         </Typography>

//         {/* Display list of options */}
//         {fragrance.allFragrances &&
//           fragrance.allFragrances.map((option, index) => {
//             // Check if the option's source is credible
//             const isCredible = credibleKeywords.some((keyword) =>
//               option.source.toLowerCase().includes(keyword.toLowerCase())
//             );

//             return (
//               <Box
//                 key={index}
//                 mt={2}
//                 p={1}
//                 style={{
//                   border: '1px solid #ccc',
//                   borderRadius: '8px',
//                   marginBottom: '1rem',
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   style={{
//                     fontWeight: 'bold',
//                     color: '#333',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   {option.source}
//                   {/* Verified Symbol */}
//                   {isCredible && (
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       ml={1}
//                       style={{ color: '#4caf50' }}
//                     >
//                       <CheckCircleIcon
//                         style={{ fontSize: '1rem', marginRight: '4px' }}
//                       />
//                       <Typography
//                         variant="body2"
//                         style={{ fontWeight: 'bold', fontSize: '0.8rem' }}
//                       >
//                         Verified
//                       </Typography>
//                     </Box>
//                   )}
//                 </Typography>
//                 <Typography variant="body2" style={{ color: '#555' }}>
//                   Price: {option.price}
//                 </Typography>
//                 {/* Add reviews if available */}
//                 {option.reviews && (
//                   <Typography variant="body2" style={{ color: '#555' }}>
//                     Reviews: {option.reviews}
//                   </Typography>
//                 )}
//                 {/* Button to open the link */}
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   href={option.link}
//                   target="_blank"
//                   style={{ marginTop: '0.5rem', marginRight: '0.5rem' }}
//                 >
//                   Buy Now
//                 </Button>
//                 {/* Button to view comments for this option */}
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => setSelectedOptionIndex(index)}
//                   style={{ marginTop: '0.5rem' }}
//                 >
//                   View Comments
//                 </Button>
//               </Box>
//             );
//           })}

//         {/* Comments Section */}
//         {selectedOptionIndex !== null && (
//           <Box mt={4}>
//             <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
//               Community Chat
//             </Typography>
//             {/* Add New Comment */}
//             <Box mt={2}>
//               <TextField
//                 label="Add a comment"
//                 fullWidth
//                 multiline
//                 rows={2}
//                 variant="outlined"
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleAddComment}
//                 style={{ marginTop: '0.5rem' }}
//               >
//                 Post Comment
//               </Button>
//             </Box>
//             {/* Comments List */}
//             <Box mt={2}>
//               {(() => {
//                 const selectedOption = fragrance.allFragrances[selectedOptionIndex];
//                 const optionKey = selectedOption.link;
//                 const comments = commentsMap[optionKey] || [];

//                 return comments.length > 0 ? (
//                   comments.map((comment) => (
//                     <Box
//                       key={comment.id}
//                       mt={1}
//                       p={1}
//                       style={{ border: '1px solid #ccc', borderRadius: '8px' }}
//                     >
//                       <Typography
//                         variant="body2"
//                         style={{ fontWeight: 'bold', color: '#000' }} // Changed color to black
//                       >
//                         {comment.userName}
//                       </Typography>
//                       <Typography variant="body2" style={{ color: '#555' }}>
//                         {comment.text}
//                       </Typography>
//                       <Box display="flex" alignItems="center" mt={1}>
//                         <IconButton
//                           onClick={() => handleUpvote(optionKey, comment.id)}
//                           size="small"
//                         >
//                           <ThumbUpIcon fontSize="small" />
//                         </IconButton>
//                         <Typography variant="body2">{comment.upvotes}</Typography>
//                         <IconButton
//                           onClick={() => handleDownvote(optionKey, comment.id)}
//                           size="small"
//                         >
//                           <ThumbDownIcon fontSize="small" />
//                         </IconButton>
//                         <Typography variant="body2">{comment.downvotes}</Typography>
//                       </Box>
//                     </Box>
//                   ))
//                 ) : (
//                   <Typography variant="body2" style={{ color: '#555' }}>
//                     No comments yet.
//                   </Typography>
//                 );
//               })()}
//             </Box>
//           </Box>
//         )}
//       </Box>
//     </Modal>
//   );
// };

// export default ProductModal;



// src/components/ProductModal.jsx
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { track } from '@vercel/analytics'; // Import track function

const credibleKeywords = ['Amazon', "Macy's", 'Walmart', 'Nordstrom', 'Sephora', 'Ulta'];

const ProductModal = ({ open, onClose, fragrance, user }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [commentsMap, setCommentsMap] = useState({});
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Reset selected option and new comment when modal opens/closes
    if (open) {
      setSelectedOptionIndex(null);
      setNewComment('');
    }
  }, [open]);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const selectedOption = fragrance.allFragrances[selectedOptionIndex];
    const optionKey = selectedOption.link;

    // Create a new comment object
    const newCommentObj = {
      id: Date.now(), // Using timestamp as a temporary ID
      text: newComment,
      upvotes: 0,
      downvotes: 0,
      userId: user ? user.uid : 'anonymous',
      userName: user ? user.displayName || 'Anonymous' : 'Anonymous',
    };

    // Update comments map
    setCommentsMap((prevCommentsMap) => {
      const existingComments = prevCommentsMap[optionKey] || [];
      return {
        ...prevCommentsMap,
        [optionKey]: [...existingComments, newCommentObj],
      };
    });

    setNewComment('');

    // Track add comment event
    track('add_comment', {
      event_category: 'Comment',
      event_label: selectedOption.source,
    });
  };

  // Handle upvoting a comment
  const handleUpvote = (optionKey, commentId) => {
    setCommentsMap((prevCommentsMap) => {
      const updatedComments = prevCommentsMap[optionKey].map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, upvotes: comment.upvotes + 1 };
        }
        return comment;
      });
      return { ...prevCommentsMap, [optionKey]: updatedComments };
    });

    // Track upvote event
    track('upvote_comment', {
      event_category: 'Comment',
      event_label: optionKey,
    });
  };

  // Handle downvoting a comment
  const handleDownvote = (optionKey, commentId) => {
    setCommentsMap((prevCommentsMap) => {
      const updatedComments = prevCommentsMap[optionKey].map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, downvotes: comment.downvotes + 1 };
        }
        return comment;
      });
      return { ...prevCommentsMap, [optionKey]: updatedComments };
    });

    // Track downvote event
    track('downvote_comment', {
      event_category: 'Comment',
      event_label: optionKey,
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          backgroundColor: 'white',
          padding: '1rem',
          maxWidth: '500px',
          margin: '50px auto',
          borderRadius: '8px',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}
        >
          {fragrance.title}
        </Typography>

        {/* Display list of options */}
        {fragrance.allFragrances &&
          fragrance.allFragrances.map((option, index) => {
            // Check if the option's source is credible
            const isCredible = credibleKeywords.some((keyword) =>
              option.source.toLowerCase().includes(keyword.toLowerCase())
            );

            return (
              <Box
                key={index}
                mt={2}
                p={1}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 'bold',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {option.source}
                  {/* Verified Symbol */}
                  {isCredible && (
                    <Box
                      display="flex"
                      alignItems="center"
                      ml={1}
                      style={{ color: '#4caf50' }}
                    >
                      <CheckCircleIcon
                        style={{ fontSize: '1rem', marginRight: '4px' }}
                      />
                      <Typography
                        variant="body2"
                        style={{ fontWeight: 'bold', fontSize: '0.8rem' }}
                      >
                        Verified
                      </Typography>
                    </Box>
                  )}
                </Typography>
                <Typography variant="body2" style={{ color: '#555' }}>
                  Price: {option.price}
                </Typography>
                {/* Add reviews if available */}
                {option.reviews && (
                  <Typography variant="body2" style={{ color: '#555' }}>
                    Reviews: {option.reviews}
                  </Typography>
                )}
                {/* Button to open the link */}
                <Button
                  variant="contained"
                  color="primary"
                  href={option.link}
                  target="_blank"
                  style={{ marginTop: '0.5rem', marginRight: '0.5rem' }}
                  onClick={() => {
                    // Track 'Buy Now' click event
                    track('buy_now_click', {
                      event_category: 'Fragrance',
                      event_label: option.source,
                    });
                  }}
                >
                  Buy Now
                </Button>
                {/* Button to view comments for this option */}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setSelectedOptionIndex(index);
                    // Track 'View Comments' event
                    track('view_comments', {
                      event_category: 'Fragrance',
                      event_label: option.source,
                    });
                  }}
                  style={{ marginTop: '0.5rem' }}
                >
                  View Comments
                </Button>
              </Box>
            );
          })}

        {/* Comments Section */}
        {selectedOptionIndex !== null && (
          <Box mt={4}>
            <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
              Community Chat
            </Typography>
            {/* Add New Comment */}
            <Box mt={2}>
              <TextField
                label="Add a comment"
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddComment}
                style={{ marginTop: '0.5rem' }}
              >
                Post Comment
              </Button>
            </Box>
            {/* Comments List */}
            <Box mt={2}>
              {(() => {
                const selectedOption = fragrance.allFragrances[selectedOptionIndex];
                const optionKey = selectedOption.link;
                const comments = commentsMap[optionKey] || [];

                return comments.length > 0 ? (
                  comments.map((comment) => (
                    <Box
                      key={comment.id}
                      mt={1}
                      p={1}
                      style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                    >
                      <Typography
                        variant="body2"
                        style={{ fontWeight: 'bold', color: '#000' }}
                      >
                        {comment.userName}
                      </Typography>
                      <Typography variant="body2" style={{ color: '#555' }}>
                        {comment.text}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={1}>
                        <IconButton
                          onClick={() => handleUpvote(optionKey, comment.id)}
                          size="small"
                        >
                          <ThumbUpIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2">{comment.upvotes}</Typography>
                        <IconButton
                          onClick={() => handleDownvote(optionKey, comment.id)}
                          size="small"
                        >
                          <ThumbDownIcon fontSize="small" />
                        </IconButton>
                        <Typography variant="body2">{comment.downvotes}</Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" style={{ color: '#555' }}>
                    No comments yet.
                  </Typography>
                );
              })()}
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ProductModal;
