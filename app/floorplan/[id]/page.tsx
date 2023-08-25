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
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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

  const [loading, setLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate loading for 10 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  const keyframes = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

  return (
    <Box sx={{ padding: 2, backgroundColor: "#fff", height: 843 }}>
      <Box sx={{ padding: 1 }}>
        <ArrowBackIcon
          onClick={() => {
            router.push("/floorplan");
          }}
        />
      </Box>
      <style>{keyframes}</style>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "8px solid",
              borderColor: "#766DF4 #0000",
              animation: "spin 1.5s linear infinite",
            }}
          ></Box>
        </Box>
      ) : File || EventName || title ? (
        <>
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20, marginTop: 3 }}>
              {EventName}
            </Typography>
          </Box>
          <Box sx={{ height: "10rem", marginTop: 5 }}>
            <Link href={"/" + File}>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                }}
              >
                Download Plan?
              </Typography>
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
          >
          </Box>
        </>
      ) : (
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#523FAD",
            fontSize: "26px",
            fontWeight: 600,
            marginY: 20,
          }}
        >
          <SentimentVeryDissatisfiedIcon sx={{ marginX: 8, fontSize: 100 }} />
        </Typography>
      )}
    </Box>
  );
};
export default VendorData;
