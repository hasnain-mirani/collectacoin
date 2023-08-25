"use client";
import { Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import UpoloadData from "../components/uploddata";
import UploadVendor from "@/app/components/uploadVendorData";
import UploadPhotoOPS from "@/app/components/uploadPhotoOPS";
import UploadPlan from "@/app/components/uploadFloorPlan";
import Editdetail from "@/app/components/editdetail";
import { useState } from "react";
import { Dashboard } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import axios from "axios";
import router from "next/router";
import UploadAutograph from '@/app/components/uploadAutograph';

const page = () => {
  interface Details {
    name: string;
    email: string;
    // Add more details fields as needed
  }
  // const [programingData, setProgramingData] = useState<any>(null);
  // const [autographData, setAutographData] = useState<any>(null);

  // const [details, setDetails] = useState<Details>({
  //   name: "",
  //   email: "",
  // });
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <Box className="container" sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        className="left"
        sx={{ backgroundColor: "#EEECF9", flex: 0.7, height: "100vh" }}
      >
        <Box sx={{ padding: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ width: 56, height: 56 }}>A</Avatar>
            <Box sx={{ marginX: 1 }}>
              <Typography variant="h6">ADMIN</Typography>
              <Typography>admin123@gmail.com</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: 1,
              justifyContent: "center",
              display: "flex",
              gap: 1,
              alignItems: "center",
              marginTop: "1rem",
              ":hover": { backgroundColor: "#523FAD33" },
            }}
          >
            <Dashboard />
            <Typography>Dashboard</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className="right"
        sx={{ backgroundColor: "#FFF", flex: 3, height: "100vh" }}
      >
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Programming Schedule
            </Typography>
            <UpoloadData />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Autograph Schedule
              </Typography>
              <UploadAutograph  />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Editdetail />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Photo Ops Schedule
            </Typography>
            <UploadPhotoOPS />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Add Vendor
            </Typography>
            <UploadVendor />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Create Floorplan
            </Typography>
            <UploadPlan />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;