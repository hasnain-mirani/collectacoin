"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState , useEffect } from "react";
import axios from 'axios';
import Mybutton1 from "@/app/components/Mybutton1";

const EventData = () => {
  const [Desc, setDesc] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [Pic, setPic] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Time, setTime] = useState<string>("");
  const [Date, setDate] = useState<string>("");
  const [Hallno, setHallNo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const getEvents = async (id: number) => {
    try {
      const response = await axios.get("/api/fetchProgram");
      const { allPrograms } = response.data;

      // Fetch the event data based on the ID and set the state
      setDesc(allPrograms[Number(id)].ItemDescription || "");
      setSubject(allPrograms[Number(id)].ItemSubject || "");
      setPic(allPrograms[Number(id)].Pic || "");
      setHallNo(allPrograms[Number(id)].Hallno || "");
      setTitle(allPrograms[Number(id)].ItemTitle || "");
      setDate(allPrograms[Number(id)].Date || "");
      setTime(allPrograms[Number(id)].Time || "");

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
    <Box sx={{ padding: 2, backgroundColor: "#fff" , height: 705 }}>

      <Box sx={{ padding: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          {Title}
        </Typography>
      </Box>
      <Box sx={{ height: "14rem" }}>
        <Image
          src={"/" + Pic}
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
        />
      </Box>
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
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Typography>
            {Desc}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginY: 1,
        }}
      >
         {!loading && (
          <Mybutton1
            ItemTitle={Title}
            Date={Date}
            Time={Time}
            Pic={Pic}
            Hallno={Hallno}
            ItemSubject={subject}
            ItemDescription={Desc}
          />
        )}
      </Box>
    </Box>
  );
};
export default EventData;
