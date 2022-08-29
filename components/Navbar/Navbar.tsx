import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Avocado, Basket } from '@components/SVGIcons'
import { useRouter } from 'next/router'

export default function ButtonAppBar() {
  const router = useRouter()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background: '#FFFFFF'}}>
        <Toolbar>
          <Button onClick={()=> router.push('/') } color="inherit">
            <Avocado />
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
            Avocado Store
          </Typography>
          {/* TODO: Functional Shopping Cart */}
          <Button  style={{color: '#000', textTransform: 'none'}}>
            <Basket />
            Shopping Cart (0)
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
