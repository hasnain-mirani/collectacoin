"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Mybutton1 from "@/app/components/Mybutton1";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const EventData = () => {
  const [id, setId] = useState<any>();
  const [Desc, setDesc] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [Pic, setPic] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Time, setTime] = useState<string>("");
  const [Date, setDate] = useState<string>("");
  const [Hallno, setHallNo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const router = useRouter();
  const getEvents = async (ID: number) => {
    try {
      const response = await axios.get("/api/fetchEvents");
      const { allEvents } = response.data;

      // Fetch the event data based on the ID and set the state
      setDesc(allEvents[Number(ID)].ItemDescription || "");
      setSubject(allEvents[Number(ID)].ItemSubject || "");
      setPic(allEvents[Number(ID)].Pic || "");
      setHallNo(allEvents[Number(ID)].Hallno || "");
      setTitle(allEvents[Number(ID)].ItemTitle || "");
      setDate(allEvents[Number(ID)].Date || "");
      setTime(allEvents[Number(ID)].Time || "");

      setLoading(false);
    } catch (error) {
      console.log(`Event ${Number(ID)} not found`);
      setLoading(false);
    }
  };

  useEffect(() => {
    const ID = window.location.pathname.split("/").pop();
    setId(Number(ID));
    getEvents(Number(ID));
  }, []);

  return (
    <>
      <ArrowBackIcon
        sx={{marginLeft: "15px"}}
        onClick={() => {
          router.push("/dashboard/events");
        }}
      />
      <Box sx={{ margin: 2, height: 674 }}>
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
        >
          {!loading && (
            <Mybutton1
              id={id}
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
    </>
  );
};

export default EventData;
