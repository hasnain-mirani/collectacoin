'use client'
import { Box, IconButton, Typography, } from "@mui/material";
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
import router from "next/router";
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
  const newval=useAppSelector((state)=>state.userReducer.value)
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ backgroundColor: "#EEECF9 !important", borderRadius: "10px" }}
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
                <Typography variant="h6">First Name Last Name</Typography>
                <Typography variant="body1">email@email.com</Typography>
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
                <IconButton onClick={() => router.push("/dashboard/home")}>
                  <Home />
                </IconButton>
                <Typography sx={{ cursor: "pointer" }}>Home</Typography>
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
                <IconButton onClick={() => router.push("/dashboard/myschedule")} >
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
                <IconButton>
                  <BsPersonSquare />
                </IconButton>
                <Typography sx={{ cursor: "pointer" }}>My Ticket</Typography>
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
                </IconButton>
                <Typography sx={{ cursor: "pointer" }}>Panels</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <AiFillSetting />
              </IconButton>
              <Typography>Settings</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Index;
