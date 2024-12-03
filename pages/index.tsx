import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
//import { useRouter } from 'next/router'
//import { Routes } from '@/common/routes'

const HomePage: NextPage = () => {
  //const router = useRouter()

  useEffect(() => {
    //router.push(Routes.About);
  }, [])

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
