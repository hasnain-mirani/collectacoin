"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Mybutton1 from "@/app/components/Mybutton1";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import "@/app/styles/style.css";
const EventData = () => {
  const [Desc, setDesc] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [Pic, setPic] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Time, setTime] = useState<string>("");
  const [Date, setDate] = useState<string>("");
  const [Hallno, setHallNo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const router = useRouter();
  const getEvents = async (id: number) => {
    try {
      const response = await axios.get("/api/fetchEventsDesc");
      const { allEvents } = response.data;

      // Fetch the event data based on the ID and set the state
      setDesc(allEvents[Number(id)].ItemDescription || "");
      setSubject(allEvents[Number(id)].ItemSubject || "");
      setPic(allEvents[Number(id)].Pic || "");
      setHallNo(allEvents[Number(id)].Hallno || "");
      setTitle(allEvents[Number(id)].ItemTitle || "");
      setDate(allEvents[Number(id)].Date || "");
      setTime(allEvents[Number(id)].Time || "");

      setLoading(false);
    } catch (error) {
      console.log(`Event ${id} not found`);
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    getEvents(Number(id));
  }, []);

  return (
    <>
      <ArrowBackIcon
        sx={{ marginLeft: "15px" }}
        onClick={() => {
          router.push("/dashboard/home");
        }}
      />
      <Box sx={{ margin: 2, height: 650 }}>
        {Pic ? (
          <Box sx={{ height: "14rem" }}>
            <Image
              src={Pic && "/" + Pic}
              alt="image"
              width={200}
              height={200}
              sizes="100vw"
              style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "20vh",
            }}
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "8px solid",
                borderColor: "#766DF4 #0000",
                animation: "s1 1s infinite",
              }}
            ></Box>
          </Box>
        )}
        <Box
          sx={{
            backgroundColor: "#EEECF9",
            paddingY: 1,
            paddingX: 2,
            borderRadius: "8px",
            marginTop: 2,
          }}
        >
          <Box>
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <Typography
                sx={{
                  color: "#523FAD",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {subject}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginTop: 1 }}>
            <Typography>{Desc}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginY: 1,
          }}
        ></Box>
      </Box>
    </>
  );
};

export default EventData;
