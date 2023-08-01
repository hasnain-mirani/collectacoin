"use client";
import React, { useState, useEffect } from "react";
import { IoMdStats } from "react-icons/io";
import { BsFillBucketFill, BsPersonSquare } from "react-icons/bs";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { BiMessageSquareEdit } from "react-icons/bi";
import { ChevronLeft, Home } from "@mui/icons-material";

import { GrClose } from "react-icons/gr";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
const navItems: any = [
  // {
  //   text: 'Dashboard',
  //   icon: <HomeOutlined />
  // },
  // // {
  // //     text: 'ClientFacing',
  // //     icon: null
  // //   },
  // {
  //   text: "MessageTemplates",
  //   icon: <BiMessageSquareEdit />
  // },
  //   {
  //     text: 'followuptemplates',
  //     icon: <Groups2Outlined />
  //   },
  // {
  //   text: 'Transactions',
  //   icon: <ReceiptLongOutlined />
  // },
  // {
  //   text: 'Geography',
  //   icon: <PublicOutlined/>
  // },
  // {
  //   text: 'Sales',
  //   icon: null
  // },
  // {
  //   text: 'Overview',
  //   icon: <PointOfSaleOutlined />
  // },
  // {
  //   text: 'Daily',
  //   icon: <TodayOutlined />
  // },
  // {
  //   text: 'Monthly',
  //   icon: <CalendarMonthOutlined />
  // },
  // {
  //   text: 'Breakdown',
  //   icon: <PieChartOutlined/>
  // },
  // {
  //   text: 'Management',
  //   icon: null
  // },
  // {
  //   text: 'Admin',
  //   icon: <AdminPanelSettingsOutlined />
  // },
  // {
  //   text: 'Performance',
  //   icon: <TrendingUpOutlined/>
  // },
];

const Sidebar = ({ drawerWidth, isNonMobile }: any) => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleMenuButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [active, setActive] = useState("");
  // useEffect(()=> {
  //   setActive(pathname.substring(1))
  // }, [pathname])

  return (
    <Box component="nav">
      <IconButton
        onClick={handleMenuButtonClick}
        sx={{ backgroundColor: "#EEECF9 !important", borderRadius: "10px" }}
      >
        <AiOutlineMenu color="#523FAD" />
      </IconButton>

      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              // color: theme.palette.secondary[200],
              // backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              boxShadow: "4px 0 6px 2px #777",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <Box color={theme.palette.secondary.main}>
                <Box>
                  {/* <Typography variant='h4' fontWeight="bold">ECOMMMVISION</Typography> */}
                </Box>
                {!isNonMobile && (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <IconButton
                        onClick={() => setIsSidebarOpen((prev: any) => !prev)}
                      >
                        <GrClose />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <Home />
                        </IconButton>
                        <Typography>Home</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <IoMdStats />
                        </IconButton>
                        <Typography>My Schedule</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <BsPersonSquare />
                        </IconButton>
                        <Typography>My Ticket</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <BsFillBucketFill />
                        </IconButton>
                        <Typography>Panels</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <BsFillBucketFill />
                        </IconButton>
                        <Typography>Vendors</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton>
                          <BsFillBucketFill />
                        </IconButton>
                        <Typography>Floorplan</Typography>
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
                )}
              </Box>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
