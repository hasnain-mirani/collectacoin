"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase, Button, Typography } from "@mui/material";
import { BsFilter, BsBookmark } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";
import { CalendarMonth } from "@mui/icons-material";
import axios from "axios";


export default function Dashboard (){
  const [activePage, setActivePage] = useState<string>("home");
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();
  const [data, setData] = useState({
    _id:'',
    firstName:'',
    lastName:'',
    email:''
  })
  // console.log(pathname);
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);
  const getDetail= async()=>{
    const res= await axios.get('api/user/userdata')
   //  console.log(res.data)
    setData(res.data.data)
   }
   useEffect(() => {
     
     getDetail()
   }, [])
   return (
    <Box
    sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff",p:1}}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginY: 2,
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
         
          alignItems: "center",
          width: "100vw",
          padding: 1,
        }}
      >
        <Side />
        <Typography
          sx={{
            color: "#523FAD",
            fontSize: "26px",
            fontWeight: 600,
            marginX: 8,
          }}
        >
          DASHBOARD
        </Typography>
      
      </Box>
    </Box>
    <Box sx={{p:1, marginLeft:1}}>
      <Typography sx={{ color: "#000", fontSize: " 30px", fontWeight: 600 }}>
        Hey, {data.firstName}
      </Typography>
      <Typography sx={{ color: "#595959", fontSize: "18px", width: "80vw" }}>
        Don’t forget to visit your nearest events that you have subscribe at
        this week.
      </Typography>
    </Box>
    <Box sx={{overflowX: "scroll" , width: "100%"}} >
      <Box sx={{ display: "flex", maxWidth: "500px", margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          marginLeft: 2,
          marginY: 2,
          position: "relative",
          borderRadius: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img
            src="allevent.png"
            alt=""
            onClick={() => {
              router.push("/dashboard/events");
            }}
          />
          <Typography sx={{ color: "#523FAD" }}>All Events</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img
            src="autograph.png"
            alt=""
            onClick={() => {
              router.push("/dashboard/autographs");
            }}
          />
          <Typography sx={{ color: "#523FAD" }}>Autograph</Typography>
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img
            src="camera.png"
            alt=""
            onClick={() => {
              router.push("/dashboard/PhotoOPS");
            }}
          />
          <Typography sx={{ color: "#523FAD" }}>Photo OPS</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
    
          }}
        >
          <img
            src="Programming.png"
            height={60}
            width={60}
            alt=""
            onClick={() => {
              router.push("/dashboard/Programming");
            }}
          />
          <Typography sx={{ color: "#523FAD" }}>Programing</Typography>
        </Box>
      </Box>
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