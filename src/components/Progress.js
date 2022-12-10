import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Progress ({ progress }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress size='18rem' variant='determinate' value={progress} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant='caption'
          component='div'
          color='text.secondary'
          sx={{ fontSize: 20 }}
        >
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

export default Progress
