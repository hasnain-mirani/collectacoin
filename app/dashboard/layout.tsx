 'use client'

import { Box, InputBase,Button,} from "@mui/material"
import {BsFilter, BsBookmark} from "react-icons/bs";
import  {CiSearch} from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import {useState, useEffect, useContext} from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const {searchVal, setSearchVal} = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();


  const [activePage, setActivePage] = useState<string>('home')
  // console.log(pathname);
  useEffect(()=> {
    let paths = pathname.split("/");
  
    setActivePage(paths[2]);
  }, [pathname])
  
  return (
          <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#fff"}}>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginY: 2, gap: 2}}>
          <Box sx={{}}>
                   <Side/>
              </Box>
              <Box sx={{}}>
                  <InputBase value={searchVal} placeholder="Search" endAdornment={<CiSearch size="1.3em" style={{marginRight: "10px"}} />} sx={{backgroundColor: "#EEECF9", borderRadius: "20px", width: "17rem" ,paddingLeft: 4, paddingY: 0.5}} onChange={(e)=> setSearchVal(e.target.value)} />
              </Box>

          </Box>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <Box sx={{display: "flex", flexDirection: "row", margin: 2, border: "1.5px solid", borderColor: "#523FAD", borderRadius: "25px", overflow: "hidden",}}>
            <Button sx={{backgroundColor: activePage === "home"? "#523FAD !important": "white", color: activePage === "home"? "white": "black", paddingX: 3.2, paddingY: 0.7, fontSize: 12, borderRadius: "0px", width: "6.5rem", borderRight: "1px solid",borderColor: "#523FAD"}} onClick={()=> router.push("/dashboard/home")}>
                  Home
            </Button>
            <Button sx={{backgroundColor: activePage === "events"? "#523FAD !important": "white", color: activePage === "events"? "white": "black",paddingX: 3.2, paddingY: 0.7, fontSize: 12, borderRadius: "0px", width: "6.5rem", borderLeft: "1px solid",borderRight: "1px solid", borderColor: "#523FAD"}}  onClick={()=> router.push("/dashboard/events")}>
                  Events
            </Button>
            <Button sx={{backgroundColor: activePage === "autographs"? "#523FAD !important": "white", color: activePage === "autographs"? "white": "black",paddingX: 3.2, paddingY: 0.7, fontSize: 12, borderRadius: "0px", width: "6.5rem", borderLeft: "1px solid", borderColor: "#523FAD"}}  onClick={()=> router.push("/dashboard/autographs")}>
                  Autographs
            </Button>
          </Box>
          </Box>

          {children}
        
      </Box>
  )
}