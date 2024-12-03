import React from 'react'
import { NextPage } from 'next'
import { Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About page title</title>
        <meta name="description" content="About page description" />
      </Head>
      <Typography component={'h1'} variant="h1">
        Home Page
      </Typography>
      <Typography component={'h2'} variant="h2">
        <Link href={'/'}> back home</Link>
      </Typography>
    </div>
  )
}
export default AboutPage
