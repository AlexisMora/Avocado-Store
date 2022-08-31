import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import { Grid } from '@mui/material'

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="start"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item xs={12}>
        <footer>this is the footer</footer>
      </Grid>
    </Grid>
  )
}

export default Layout