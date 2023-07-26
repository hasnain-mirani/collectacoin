"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "@/app/components/side";
import { CalendarMonth } from "@mui/icons-material";


export default function Dashboard ({params}:any){
  const [activePage, setActivePage] = useState<string>("home");
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);
   return (
    <Box
    sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff",p:1}}
  >


    <Box sx={{p:1, marginLeft:1}}>
      <Typography sx={{ color: "#000", fontSize: " 30px", fontWeight: 600 }}>
        Hey, {params.id}
      </Typography>
      <Typography sx={{ color: "#595959", fontSize: "18px", width: "80vw" }}>
        Don’t forget to visit your nearest events that you have subscribe at
        this week.
      </Typography>
    </Box>
    <Box sx={{ display: "flex", gap: 2, marginX:2 }}>
      <Box
        sx={{
          
          display: "flex",
          gap: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          height: "120px",
          borderRadius: "30px",
          background: "#EEECF9",
        }}
      >
        <img src="allevent.png" alt="" />
        <Typography sx={{ color: "#523FAD" }}>All Events</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          height: "120px",
          borderRadius: "30px",
          background: "#EEECF9",
        }}
      >
        <img src="autograph.png" alt="" />
        <Typography sx={{ color: "#523FAD" }}>Autograph</Typography>
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          height: "120px",
          borderRadius: "30px",
          background: "#EEECF9",
        }}
      >
        <img src="camera.png" alt="" />
        <Typography sx={{ color: "#523FAD" }}>Photo OPS</Typography>
      </Box>
    </Box>
    <Box
      sx={{
        paddingX: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          p: 2,
        }}
      >
        <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          Upcoming Events
        </Typography>
        <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          03/10
        </Typography>
      </Box>
      <Box
        sx={{
          width: "350px",
          height: "250px",
          backgroundImage: "url('pexels.png')",
          borderRadius: "30px",
          
          backdropFilter: 'blur(10px)'
      
        }}
      >
       <Box sx={{marginY:20,marginX:2,
        display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'flex-start'}}>
       <Box sx={{display:'flex'}}> 
          <CalendarMonth sx={{ color: "#fff"}}/>
          <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}>March 09, 2023</Typography>
          </Box>
        <Box sx={{ color: "#fff", fontSize: "22px", fontWeight: 500 }}>Programming event</Box>
        </Box> 
      </Box>
    </Box>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
         
          p: 2,
        }}
      >
        <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          Upcoming Events
        </Typography>
        <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          03/10
        </Typography>
      </Box>
      <Box  sx={{marginX:1}}>
      {/* Photo Ops Schedule */}
        <Box sx={{display:'flex', justifyContent:'space-between',p:1, alignItems:'center'}}>  
          <Box sx={{ display:'flex',alignItems:'center', flexDirection:'column'}}> 
            <Typography sx={{color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>27</Typography>
            <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}>JUN</Typography>
          </Box>
          <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>Photo Ops Schedule</Typography>
            <Typography sx={{ color: "#595959", fontSize: "14px", fontWeight: 500 }}>70 going 13 interested</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{border: '2px solid #523FAD',borderRadius:'30px  '}}> <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>Going</Typography></Button>
        </Box>
        </Box>
        {/* Photo Ops Schedule */}
        <Box sx={{display:'flex', justifyContent:'space-between',p:1, alignItems:'center'}}>  
          <Box sx={{ display:'flex',alignItems:'center', flexDirection:'column'}}> 
            <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>27</Typography>
            <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}>JUN</Typography>
          </Box>
          <Box>
        <Typography sx={{  fontSize: "20px", fontWeight: 600 }}>Program Schedule</Typography>
            <Typography sx={{ color: "#595959", fontSize: "14px", fontWeight: 500 }}>70 going 13 interested</Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{background:'#523FAD',borderRadius:'30px  '}}> <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>Going</Typography></Button>
        </Box>
        </Box>
        {/* Autograph Schedule */}
        <Box sx={{display:'flex', justifyContent:'space-between',p:1, alignItems:'center'}}>  
          <Box sx={{ display:'flex',alignItems:'center', flexDirection:'column'}}> 
            <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>27</Typography>
            <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}>JUN</Typography>
          </Box>
          <Box>
        <Typography sx={{fontSize: "20px", fontWeight: 600 }}>Autograph Schedule</Typography>
            <Typography sx={{ color: "#595959", fontSize: "14px", fontWeight: 500 }}>70 going 13 interested</Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{border: '2px solid #523FAD',borderRadius:'30px  '}}> <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>Going</Typography></Button>
        </Box>
        </Box>
      </Box>
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    ></Box>
  </Box>

   )
}