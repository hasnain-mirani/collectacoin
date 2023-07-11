"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase, Button, Typography, IconButton } from "@mui/material";
import { BsFilter, BsBookmark } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";
import { CalendarMonth } from "@mui/icons-material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();

  const [activePage, setActivePage] = useState<string>("home");
  console.log(pathname);
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", p:1 }}
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
              marginX: 10,
            }}
          >
            My Ticket
          </Typography>
         
        </Box>
      </Box>
      <Box sx={{ paddingX: 1 }}>
        <Typography sx={{ color: "#000", fontSize: " 30px", fontWeight: 600 }}>
          Hey, User!
        </Typography>
        <Typography sx={{ color: "#595959", fontSize: "18px", width: "80vw" }}>
          Don’t forget to visit your nearest events that you have subscribe at
          this week.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", paddingX: 1, gap: 2 }}>
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
            width: '100%',
            p: 1,
          }}
        >
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
            Today Ticket
          </Typography>
            
        </Box>
        <Box
          sx={{
            p:1,
            width: "370px",
            height: "200px",
            backgroundImage: "url('pexels.png')",
            borderRadius: "30px",
            margin:1,
            backdropFilter: 'blur(10px)'
        
          }}
        >
         <Box sx={{marginY:15,marginX:2,
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
            width: "100",
            p: 1,
          }}
        >
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          All Tickets
          </Typography>
       
        </Box>
        <Box >
        <Box sx={{minHeight: "6rem", backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row", margin:1}}>
                  <img src="https://picsum.photos/200" alt="image"              
                      width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '37%', height: '100%', borderRadius: "20px" }} />
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
                 </Box>
         
        </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      ></Box>

      {children}
    </Box>
  );
}
