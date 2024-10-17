import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header/Header.jsx'
import Container from '../Container/Container.jsx'

const Content = () => {
  return (
    <Box sx={{backgroundColor:'#F5F7FA'}} flex={25}>
    <Header/>
    <Container/>
    </Box>
  )
}

export default Content