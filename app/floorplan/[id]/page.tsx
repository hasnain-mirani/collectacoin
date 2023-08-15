"use client";
import { Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Router, WindowSharp } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import path from "path";
import fs from "fs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const VendorData = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [EventName, setEventName] = useState<string>("");
  const [Venue, setVenue] = useState<string>("");
  const [File, setFile] = useState<string>("");

  const getVendors = async (id: number) => {
    try {
      const response = await axios.get("/api/fetchPlan");
      const { allPlans } = response.data;

      setTitle(allPlans[Number(id)].Title || "");
      setEventName(allPlans[Number(id)].EventName || "");
      setFile(allPlans[Number(id)].File || "");
      setVenue(allPlans[Number(id)].Venue || "");
    } catch (error) {
      console.log(`Plan ${id} not found`);
    }
  };

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    getVendors(Number(id));
  }, []);
  return (
    <>
    <ArrowBackIcon
      sx={{ marginLeft: "15px" }}
      onClick={() => {
        router.push("/floorplan");
      }}
    />
    <Box sx={{ padding: 2, backgroundColor: "#fff", height: 843 }}>
      <Box sx={{ padding: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          {EventName}
        </Typography>
      </Box>
      <Box sx={{ height: "10rem" , marginTop: 5}}>
        {/* <iframe
          src={File}
          // title="PDF Viewer"
          // width={0}
          // height={0}
          // 
        /> */}
        <Link href={"/" + File} >
          <Typography style={{display: "flex" , justifyContent: "center" , alignItems: "center" , fontSize: "30px" }}>Download Plan?</Typography>
        </Link>
      </Box>
      <Box
        sx={{
          backgroundColor: "#EEECF9",
          paddingY: 1,
          paddingX: 2,
          borderRadius: "8px",
          
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#523FAD",
              textDecoration: "underline",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginY: 1,
          gap: 2,
        }}
      ></Box>
      <Box></Box>
    </Box>
    </>
  );
};
export default VendorData;
