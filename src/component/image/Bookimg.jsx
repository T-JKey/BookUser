
import React from 'react'
import PropTypes from 'prop-types';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
function Bookimg() {
  return (
    <div>
    <Box 
    >
        <Grid
          xs={12}
          lg={12}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%',
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <img
              alt=""
              src={"https://png.pngtree.com/templates/20190520/ourlarge/pngtree-creative-minimal-world-reading-day-charity-poster-book-daypublic-postersposterpublic-image_194231.jpg"}
            />
          </Box>
        </Grid>
    </Box>
    </div>
  )
}

export default Bookimg