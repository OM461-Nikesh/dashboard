import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
//import { useRouter } from 'next/router'
//import { Routes } from '@/common/routes'

const HomePage: NextPage = () => {
  //const router = useRouter()

  useEffect(() => {
    //router.push(Routes.About);
  }, [])

  return (
    <div>
      <Head>
        <title>Dashboard title</title>
        <meta name="description" content="Dashboard description" />
      </Head>
      <Box>
        <Typography component={'h1'} variant="h1">
          Home Page
        </Typography>
        <Typography component={'h2'} variant="h2">
          <Link href={'/about'}> about page</Link>
        </Typography>
      </Box>
    </div>
  )
}
export default HomePage
