"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Mybutton3 from "@/app/components/Mybutton3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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
      const response = await fetch("/api/fetchProgram", {
        next: { revalidate: 10 },
      });
      const { allPrograms } = await response.json();

      // Fetch the event data based on the ID and set the state
      setDesc(allPrograms[Number(ID)].ItemDescription || "");
      setSubject(allPrograms[Number(ID)].ItemSubject || "");
      setPic(allPrograms[Number(ID)].Pic || "");
      setHallNo(allPrograms[Number(ID)].Hallno || "");
      setTitle(allPrograms[Number(ID)].ItemTitle || "");
      setDate(allPrograms[Number(ID)].Date || "");
      setTime(allPrograms[Number(ID)].Time || "");

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

  const [loading1, setLoading1] = useState(true); // Initial loading state

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading1(false);
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
    <>
      <ArrowBackIcon
        sx={{ marginLeft: "15px" }}
        onClick={() => {
          router.push("/dashboard/Programming");
        }}
      />
      <Box sx={{ padding: 2, backgroundColor: "#fff", height: 680 }}>
        <style>{keyframes}</style>
        {loading1 ? (
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
        ) : subject || Pic || Desc ? (
          <>
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
              <Mybutton3
                id={id}
                ItemTitle={Title}
                Date={Date}
                Time={Time}
                Pic={Pic}
                Hallno={Hallno}
                ItemSubject={subject}
                ItemDescription={Desc}
              />
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
    </>
  );
};
export default EventData;
