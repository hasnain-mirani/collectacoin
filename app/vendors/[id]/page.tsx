"use client"
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

const VendorData = () => {

    useEffect(()=> {
    }, [])
    return (
       <Box sx={{padding: 2, backgroundColor: "#fff"}}>
        <Box sx={{padding: 1}}>
            <Typography sx={{fontWeight: "bold", fontSize: 20}}>Vendor Name</Typography>
        </Box>
         <Box sx={{height: "14rem"}}>
         <Image src="https://picsum.photos/200" alt="image"              
                      width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%", borderRadius: "15px" }} />
         </Box>
         <Box sx={{backgroundColor: "#EEECF9", paddingY: 1,paddingX: 2, borderRadius: "8px", marginTop: 2}}>
             <Box>
                 <Typography sx={{color: "#523FAD", textDecoration: "underline", fontWeight: "bold", fontSize: 20}}> Vendor Profile</Typography>
             </Box>
             <Box sx={{marginTop: 1}}>
                 <Typography>
                 Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industrys standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s 
with the release of Letraset sheets containing Lorem Ipsum
passages, and more recently with desktop publishing software like
Aldus PageMaker including versions of Lorem Ipsum.
                 </Typography>
             </Box>
         </Box>
         <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end", marginY: 1, gap: 2}}>
            <Button sx={{backgroundColor: "#523FAD !important", color: "#fff", borderRadius: "8px"}}>Social</Button>
            <Button sx={{backgroundColor: "#523FAD !important", color: "#fff", borderRadius: "8px"}}>Website</Button>
         </Box>
         <Box>
         </Box>
       </Box>
    )
}
export default VendorData;