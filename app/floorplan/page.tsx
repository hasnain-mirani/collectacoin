"use client";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { BsFilter, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Page = () => {
  type PLAN = {
    Title: string;
    EventName: string;
    Venue: string;
    File: string;
  };

  const [plans, setPlans] = useState<PLAN[]>([]);
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

  const fetchPlans = async () => {
    try {
      const response = await axios.get("/api/fetchPlan");
      const { allPlans } = await response.data;
      setPlans(allPlans);
      console.log("Plans Found!");
    } catch (error: any) {
      console.log("Error Message: ", error.Message);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, []);
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        height: 843,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 4,
          gap: 2,
        }}
      >
        <Box sx={{}}>
          <InputBase
            placeholder="Search"
            endAdornment={
              <CiSearch size="1.3em" style={{ marginRight: "10px" }} />
            }
            sx={{
              backgroundColor: "#EEECF9",
              borderRadius: "20px",
              width: "17rem",
              paddingLeft: 4,
              paddingY: 0.5,
            }}
          />
        </Box>

        <Box sx={{}}>
          <IconButton
            sx={{
              backgroundColor: "#EEECF9 !important",
              borderRadius: "10px",
            }}
          >
            <BiPlus color="#523FAD" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "start" }}
      >
        <ArrowBackIcon
          sx={{ marginLeft: "10px" }}
          onClick={() => {
            router.push("/userdashboard");
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
        ) : plans.length > 0 ? (
          <Box sx={{ backgroundColor: "#EEECF9", marginTop: 3 }}>
          {plans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #D9D9D9",
              }}
              onClick={() => router.push(`/floorplan/${index}`)}
            >
              <Typography sx={{ p: 2 }}>{plan.Title}</Typography>
              <Typography sx={{ p: 2 }}>{plan.Venue}</Typography>
              </Box>
              ))}

          </Box>
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

export default Page;
