import React from 'react'
import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'

const HomePage: NextPage = () => {
  return (
    <Box>
      <Typography component={'h1'} variant="h1">
        Home Page
      </Typography>
      <Typography component={'h2'} variant="h2">
        sub heading
      </Typography>
    </Box>
  )
}
export default HomePage
