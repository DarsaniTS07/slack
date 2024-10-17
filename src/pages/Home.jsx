import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from '../components/Content/Content'
import { Box, Stack } from '@mui/material'
import Appbar from '../components/Appbar/Appbar'

const Home = () => {
  return (
    <>
    <Box padding={0} margin={0}>
    <Appbar/>
    <Stack direction="row">
    <Sidebar/>
    <Content/>
    </Stack>
    </Box>
    </>
  )
}

export default Home