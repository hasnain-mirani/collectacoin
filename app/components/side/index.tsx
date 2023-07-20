'use client'
import { Box, IconButton, Typography, } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import LogoutIcon from '@mui/icons-material/Logout';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Home } from "@mui/icons-material";
import { BsPersonSquare, BsFillBucketFill } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
// import router from "next/router";
import { useRouter } from 'next/navigation'
import {useAppSelector} from '../../../store/index'
const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid `,
    padding: '0 4px',
  },
}));
function Index() {
  const router = useRouter()
  const newval=useAppSelector((state)=>state.userReducer.value)
  const logout=async()=>{
    try {
      const response= await axios.get("/api/user/logout")
      router.push('/signin')
      toast.success("Successfully logout");
    } catch (error:any) {
      console.log(error.message);
        toast.error('err in connection  ');
    }
  }
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ borderRadius: "10px" }}
      >
        <AiOutlineMenu color="#523FAD" />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          p={3}
          role="presentation"
          sx={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box>
              <IconButton onClick={() => setOpen(false)}>
                <GrClose />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: 2,
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box>
                <Avatar
                  variant="circular"
                  sx={{ width: "4rem", height: "4rem" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{} {}</Typography>
                <Typography variant="body1">{}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  ":hover": {
                    backgroundColor: "#F9F9F9",
                  },
                }}
              >
                <IconButton onClick={() => router.push("/dashboard")}>
                  <Home />
                <Typography sx={{ cursor: "pointer" }}>Home</Typography>
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ":hover": {
                    backgroundColor: "#F9F9F9",
                  },
                }}
              >
                <IconButton onClick={() => router.push("/myschedule")} >
                <StyledBadge badgeContent={newval} color="secondary">
                  <IoMdStats />
                  </StyledBadge>
                </IconButton>
               
                <Typography sx={{ cursor: "pointer" }}>My Schedule</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ":hover": {
                    backgroundColor: "#F9F9F9",
                  },
                }}
              >
                <IconButton onClick={() => router.push("/myticket")}>
                  <BsPersonSquare />
                <Typography sx={{ cursor: "pointer" }}>My Ticket</Typography>
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ":hover": {
                    backgroundColor: "#F9F9F9",
                  },
                }}
              >
                <IconButton>
                  <BsFillBucketFill />
                <Typography sx={{ cursor: "pointer" }}>Panels</Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={logout}>
                <LogoutIcon />
              <Typography>LogOut</Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Index;
