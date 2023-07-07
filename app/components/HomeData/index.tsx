"use client"
import { Box, Typography, IconButton, Button } from "@mui/material"
import Image from "next/image"
import { BsBookmark } from "react-icons/bs"
import { useRouter } from "next/navigation"

const HomeData = () => {
  const router = useRouter();
    return (
        <>
        <Box sx={{display: "flex", flexDirection: "row", overflowX: "scroll",gap: 2, marginLeft: 2, marginY: 2}}>
        <Box sx={{height: "14rem", minWidth: "16rem", position: "relative", borderRadius: "25px", overflow: "hidden"}}>
           <Image src="/image1.jpg" alt="image"              
               width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: '70%' }} />
           <Box sx={{backgroundColor: "#EEECF9", paddingX: 2, paddingY: 1, height: "30%", display: "flex", flexDirection: "row", justifyContent: "space-between"}} onClick={()=> router.push("/dashboard/events/1")}>
            <Box>
                <Box>
                  <Typography sx={{fontWeight: "bold", fontSize: 16 }}>Programming Schedule</Typography>
                </Box>
                <Box>
                  <Typography sx={{color: "#595959"}}>By Jean Cooper</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
               <IconButton><BsBookmark /></IconButton>
            </Box>
           </Box>
        </Box>
        <Box sx={{height: "14rem", minWidth: "16rem", position: "relative", borderRadius: "25px", overflow: "hidden"}}>
           <Image src="/image1.jpg" alt="image"              
               width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: '70%' }} />
           <Box sx={{backgroundColor: "#EEECF9", paddingX: 2, paddingY: 1, height: "30%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box>
                <Box>
                  <Typography sx={{fontWeight: "bold", fontSize: 16 }}>Programming Schedule</Typography>
                </Box>
                <Box>
                  <Typography sx={{color: "#595959"}}>By Jean Cooper</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
               <IconButton><BsBookmark /></IconButton>
            </Box>
           </Box>
        </Box>
        <Box sx={{height: "14rem", minWidth: "16rem", position: "relative", borderRadius: "25px",  overflow: "hidden"}}>
           <Image src="/image1.jpg" alt="image"              
               width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: '70%' }} />
           <Box sx={{backgroundColor: "#EEECF9", paddingLeft: 2, paddingRight: 1, paddingY: 1, height: "30%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box>
                <Box>
                  <Typography sx={{fontWeight: "bold", fontSize: 16 }}>Programming Schedule</Typography>
                </Box>
                <Box>
                  <Typography sx={{color: "#595959"}}>By Jean Cooper</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
               <IconButton><BsBookmark /></IconButton>
            </Box>
           </Box>
        </Box>

      </Box>
      <Box sx={{marginX: 2, marginY: 1}}>
          <Box sx={{height: "10rem", width: "100%", position: "relative", borderRadius: "25px",  overflow: "hidden"}}>
            <Box sx={{position: "absolute", top: 0, backgroundColor: "#000000", opacity: "50%", overflow: "hidden", width: "100%", height: "100%"}}>

            </Box>
              <Image src="/advertisement.png" alt="image"              
                  width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} />
              <Box sx={{position: "absolute", paddingLeft: 3, paddingRight: 1, paddingY: 1, height: "30%", display: "flex", flexDirection: "column", top: '25%'}}>
                <Box>
                    <Box>
                      <Typography sx={{fontWeight: "semibold", fontSize: 24, color: "#fff", }}>Vendor Advertisement</Typography>
                    </Box>
                    <Box>
                      <Button sx={{backgroundColor: "#523FAD !important", color: "#fff", borderRadius: "10px", marginTop: 1}}>Book Now</Button>
                    </Box>
                </Box>
              </Box>
            </Box>
            <Box>
               {/* mapped elements */}
               <Box sx={{minHeight: "7rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                <Image src="/advertisement.png" alt="image"              
                    width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '37%', borderRadius: "20px" }} />
                  <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between", paddingY: 1 }}>
                    <Box sx={{marginX: 2, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                      <Typography sx={{color: '#523FAD', fontWeight: "semibold"}}>30 May,2023</Typography>
                      <Typography sx={{fontWeight: "bold"}}>Autograph Schedule</Typography>
                      <Typography sx={{color: '#595959'}}>By Jean Copper</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginX: 2, marginY: 1}}>
                       <IconButton><BsBookmark /></IconButton>
                    </Box>

                  </Box>
               </Box>
               <Box sx={{minHeight: "7rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                <Image src="/advertisement.png" alt="image"              
                    width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '37%', borderRadius: "20px" }} />
                  <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between", paddingY: 1 }}>
                    <Box sx={{marginX: 2, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                      <Typography sx={{color: '#523FAD', fontWeight: "semibold"}}>30 May,2023</Typography>
                      <Typography sx={{fontWeight: "bold"}}>Autograph Schedule</Typography>
                      <Typography sx={{color: '#595959'}}>By Jean Copper</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginX: 2, marginY: 1}}>
                       <IconButton><BsBookmark /></IconButton>
                    </Box>

                  </Box>
               </Box>
               <Box sx={{minHeight: "7rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                <Image src="/advertisement.png" alt="image"              
                    width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '37%', borderRadius: "20px" }} />
                  <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between", paddingY: 1 }}>
                    <Box sx={{marginX: 2, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                      <Typography sx={{color: '#523FAD', fontWeight: "semibold"}}>30 May,2023</Typography>
                      <Typography sx={{fontWeight: "bold"}}>Autograph Schedule</Typography>
                      <Typography sx={{color: '#595959'}}>By Jean Copper</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginX: 2, marginY: 1}}>
                       <IconButton><BsBookmark /></IconButton>
                    </Box>

                  </Box>
               </Box>
            </Box>
         
      </Box>
      </>
    )
}
export default HomeData;