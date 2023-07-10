import { Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import { BsBookmark } from 'react-icons/bs'

function index() {
  return (
    <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between" }}>
    <Box sx={{display: "flex", flexDirection: "column",marginLeft: 2,paddingY: 2,}}>
          <Typography sx={{fontWeight: "bold"}}>Item Title</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2}}>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 0.5}}>
              
              <Typography sx={{color: '#595959', fontSize: 14}}>Date</Typography>
              <Typography  sx={{color: '#523FAD', fontSize: 12}}>17:30 - 18:00</Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 0.5}}>
              <Typography  sx={{color: '#595959', fontSize: 14}}>Time</Typography>
              <Typography  sx={{color: '#523FAD', fontSize: 12}}>17:30 - 18:00</Typography>
          </Box>

      </Box>
    </Box>

    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginX: 1, marginY: 1}}>
      <IconButton><BsBookmark size="1rem" /></IconButton>
    </Box>

  </Box>
  )
}

export default index