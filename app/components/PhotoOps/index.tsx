import { Box, Typography } from '@mui/material'
import React from 'react'
import AddData2 from '../AddData2'
// import EditDetail2 from '../EditDetail2'

function index() {
  return (
    <Box>

    <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 1,
            }}
            >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Photo OPS Schedule
            </Typography>
            <AddData2 />
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
          <EditDetail2/>
         
        </Box>
        </Box>
  )
}

export default index