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
import { ArrowBack, CalendarMonth, Search } from "@mui/icons-material";
import Items from '@/app/components/Items'
import Image from "next/image";

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
      sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff" }}
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
           gap:10,
            alignItems: "center",
            width: "100vw",
            padding: 1,
          }}
        >
          
          <IconButton onClick={() => router.push("/userdashboard")}><ArrowBack/></IconButton>
          <Typography
            sx={{
              color: "#523FAD",
              fontSize: "26px",
              fontWeight: 600,
              marginX: 2,
            }}
          >
           Schedule
          </Typography>
        </Box>
      </Box>
  <Box sx={{display:'flex', p:1, justifyContent:'space-between'}}>
  <Side />
  <InputBase fullWidth
            placeholder="Search"
            endAdornment={
              <CiSearch size="1.3em" style={{ marginRight: "10px" }} />
            }
            sx={{
              backgroundColor: "#EEECF9",
              borderRadius: "20px",
              paddingLeft: 4,
              paddingY: 0.5,
            }}
          />
  </Box>

        <Box >
        <Box sx={{minHeight: "6rem", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row",margin:1}}>
                  <Image src="https://picsum.photos/200" alt="image"              
                      width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '37%', height: '100%', borderRadius: "20px" }} />
                    <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems:'flex-start'}}>
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

                      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginX: 1, marginY: 1, alignItems:'flex-start'}}>
                       <Button variant="contained" sx={{ borderRadius:'10px'}}>Expired</Button>
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
