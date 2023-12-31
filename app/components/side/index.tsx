"use client";
import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import jwtDecode from "jwt-decode";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Home } from "@mui/icons-material";
import { BsPersonSquare, BsFillBucketFill } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
// import router from "next/router";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../../store/index";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid `,
    padding: "0 4px",
  },
}));
function Index() {
  const { data: session, status } = useSession();
  const [data, setData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const getDetail = async () => {
    const res = await axios.get("api/user/userdata");
    //  console.log(res.data)
    setData(res.data.data);
  };
  useEffect(() => {
    getDetail();
  }, []);

  // const getUserDetails = async () => {
  //   const res = await axios.get('/api/users/me')
  //   console.log(res.data);
  //   setData(res.data.data._id)
  // }

  const router = useRouter();
  const newval = useAppSelector((state) => state.userReducer.value);
  const logout = async () => {
    try {
      signOut();
      const response = await axios.get("/api/user/logout");
      router.push("/signin");
      toast.success("Successfully logout");
    } catch (error: any) {
      console.log(error.message);
      toast.error("err in connection  ");
    }
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ borderRadius: "10px" }}>
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
                {/* {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )} */}
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundImage: `url(${session?.user?.image})`,
                  }}
                />
              
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  {session?.user?.name} {data.lastName}
                </Typography>
                <Typography variant="body1">{session?.user?.email}</Typography>
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
                <IconButton onClick={() => router.push("/myschedule")}>
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
                <IconButton onClick={() => router.push("/vendors")}>
                  <PeopleIcon />
                  <Typography sx={{ cursor: "pointer" }}>Vendors</Typography>
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
                <IconButton onClick={() => router.push("/floorplan")}>
                  <ListAltIcon />
                  <Typography sx={{ cursor: "pointer" }}>Floorplan</Typography>
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
