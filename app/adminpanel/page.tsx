"use client";
import { Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import UploadDetail from '../components/uploaddetail'
import UpoloadData from '../components/uploddata'

import  Editdetail from '../components/editdetail'
import { useState } from "react";
import { Dashboard } from "@mui/icons-material";

const page = () => {
    interface Details {
        name: string;
        email: string;
        // Add more details fields as needed
      }
 const [programingData, setProgramingData] = useState<any>(null);
const [autographData, setAutographData] = useState<any>(null);

    const [details, setDetails] = useState<Details>({
        name: '',
        email: ''})
        const [isEditing, setIsEditing] = useState(false);
     
  return (
    <Box
      className="container"
      sx={{ display: "flex", flexDirection: "row"}}
    >
      <Box className='left' sx={{ backgroundColor: "#EEECF9", flex: 0.7, height:'100vh' }}>
        <Box sx={{ padding: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
            <Box sx={{ marginX: 1 }}>
              <Typography variant="h6">NAME</Typography>
              <Typography>abcdefg@email.com</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: 1,
              justifyContent: "center",
              display: "flex",
              gap: 1,
              alignItems: "center",
              marginTop: "1rem",
              ":hover": { backgroundColor: "#523FAD33" },
            }}
          >
            <Dashboard />
            <Typography>Dashboard</Typography>
          </Box>
        </Box>
      </Box>
      <Box className='right' sx={{ backgroundColor: "#FFF", flex: 3, height:'100vh' }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            DashBoard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Programing/Schedule
            </Typography>
           < UpoloadData onSave={setProgramingData} />
          </Box>

            <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
       <Editdetail/>
           
           
          </Box>
        
         
     <Box >
    
     <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Autograph Schedule
            </Typography>
            <UpoloadData onSave={setAutographData}/>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
         
          </Box>
     </Box>
        </Box>
      </Box>
    
    </Box>
  );
};

export default page;


