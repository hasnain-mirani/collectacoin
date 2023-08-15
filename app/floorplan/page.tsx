"use client";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { BsFilter, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Page = () => {
  type PLAN = {
    Title: string;
    EventName: string;
    Venue: string;
    File: string;
  };

  const [plans, setPlans] = useState<PLAN[]>([]);

  const fetchPlans = async () => {
    try {
      const response = await axios.get("/api/fetchPlan");
      const { allPlans } = await response.data;
      setPlans(allPlans);
      console.log("Plans Found!");
    } catch (error: any) {
      console.log("Error Messsage: ", error.Messsage);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, []);
  const router = useRouter();
  return (
    <>
      <ArrowBackIcon
        sx={{ marginLeft: "15px" }}
        onClick={() => {
          router.push("/userdashboard");
        }}
      />
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
        <Box sx={{ backgroundColor: "#EEECF9" }}>
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
      </Box>
    </>
  );
};

export default Page;
