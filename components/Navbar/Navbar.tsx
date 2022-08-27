import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Avocado } from '@components/SVGIcons'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Avocado />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Avocado Store
          </Typography>
          {/* TODO: Shopping Cart */}
          <Button color="inherit">Shopping Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
