"use client"
import { Box, InputBase, IconButton, Icon, Button, Typography } from "@mui/material"
import {BsFilter, BsBookmark} from "react-icons/bs";
import  {CiSearch} from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";
import ProgrammingSchedule from "@/app/components/ProgrammingSchedule";
import HomeData from "@/app/components/HomeData";


export default function Dashboard (){
  const [activePage, setActivePage] = useState<string>("home");

   return (
     //  <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#fff"}}>
     //      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginY: 2, gap: 2}}>
     //           <Box sx={{}}>
     //               <InputBase placeholder="Search" endAdornment={<CiSearch size="1.3em" style={{marginRight: "10px"}} />} sx={{backgroundColor: "#EEECF9", borderRadius: "20px", width: "17rem" ,paddingLeft: 4, paddingY: 0.5}} />
     //           </Box>
     //           <Box sx={{}}>
     //                <IconButton sx={{backgroundColor: "#EEECF9 !important", borderRadius: "10px"}}><BsFilter color="#523FAD" /></IconButton>
     //           </Box>
     //      </Box>
     //      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginY: 2, gap: 2}}>
     //         <Button sx={{backgroundColor: activePage === "home"? "#523FAD !important": "#EEECF9 !important", color: activePage === "home"? "white": "black", borderRadius: "20px", paddingX: 3.2, paddingY: 0.7, fontSize: 12}} onClick={()=> setActivePage("home")}>
     //              Home
     //         </Button>
     //         <Button sx={{backgroundColor: activePage === "events"? "#523FAD !important": "#EEECF9 !important", color: activePage === "events"? "white": "black", borderRadius: "20px", paddingX: 3.2, paddingY: 0.7, fontSize: 12}}  onClick={()=> setActivePage("events")}>
     //              Events
     //         </Button>
     //         <Button sx={{backgroundColor: activePage === "halls"? "#523FAD !important": "#EEECF9 !important", color: activePage === "halls"? "white": "black", borderRadius: "20px", paddingX: 3.2, paddingY: 0.7, fontSize: 12}}  onClick={()=> setActivePage("halls")}>
     //              Halls
     //         </Button>
     //      </Box>
     //      {activePage === "home" && <HomeData/>}
     //      {activePage ===  "halls" && <ProgrammingSchedule />}
         
     //  </Box>
     <div>
          
     </div>

   )
}