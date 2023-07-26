import { Box, Typography, Button, IconButton } from "@mui/material"
import Image from "next/image"
import { BsBookmark } from "react-icons/bs";

const ProgrammingSchedule = () => {
    return (
        <Box>
        <Box sx={{marginX: 2, marginY: 1}}>
              <Box>
                 {/* mapped elements */}
                 <Box sx={{height: "6rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                  <Image src="https://picsum.photos/200" alt="image"              
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
                 <Box sx={{minHeight: "6rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                  <Image src="https://picsum.photos/200" alt="image"              
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
              {/* advertisement */}
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
                {/* advertisement */}
                <Box>
                 {/* mapped elements */}
                 <Box sx={{minHeight: "6rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                  <Image src="https://picsum.photos/200" alt="image"              
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
                 <Box sx={{minHeight: "6rem", width: "100%", marginY: 2, backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row"}}>
                  <Image src="https://picsum.photos/200" alt="image"              
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
           
        </Box>
       </Box>
    )
}
export default ProgrammingSchedule;