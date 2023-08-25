"use client";
import { Box, Typography, IconButton, Button } from "@mui/material";
import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ContextValues } from "@/app/Context/context";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

type AutoGraphScheduleType = {
  time: String;
  substitle: String;
  name: String;
};

const HomePage = () => {
  const router = useRouter();
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const [autographs, setAutographs] = useState<AutoGraphScheduleType[]>([]);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    getData(searchVal, 1, 10);
  }, [searchVal]);

  async function getData(search: string, page: number, limit: number) {
    let res = await axios.get("http://localhost:8000/api/autographs", {
      params: {
        search,
        page,
        limit,
      },
    });
    setAutographs(res.data);
  }

  function numberIntoMonth(monthNumber: number) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[monthNumber - 1];
  }

  type EVENTS = {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    Hallno: string;
    Date: string;
    Time: string;
    Pic: string;
  };

  const [events, setEvents] = useState<EVENTS[]>([]);

  const getEvents = async () => {
    try {
      const resp = await axios.get("/api/fetchEventsDesc");
      const { allEvents } = await resp.data;
      setEvents(allEvents);
    } catch (error: any) {
      console.log("Error Fetching Events!");
    }
  };

  useEffect(() => {
    getEvents();
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
    <>
      <style>{keyframes}</style>
      {loading ? (
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
              animation: "spin 1.5s linear infinite",
            }}
          ></Box>
        </Box>
      ) : events.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            gap: 2,
            marginLeft: 2,
            marginY: 2,
          }}
        >
          {events.map((event, index) => (
            <Box
              key={index}
              sx={{
                minHeight: "14rem",
                minWidth: "10rem",
                position: "relative",
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <Image
                src={"/" + event.Pic}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "70%" }}
                onClick={() => router.push(`/dashboard/eventsAsc/${index}`)}
              />
              <Box
                sx={{
                  backgroundColor: "#EEECF9",
                  paddingX: 2,
                  paddingY: 1,
                  height: "30%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box onClick={() => router.push("dashboard/events/1")}>
                  <Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                      {event.ItemTitle}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#595959" }}>
                      {event.ItemSubject}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* <IconButton>
                  <BsBookmark />
                </IconButton> */}
                </Box>
              </Box>
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

      <Box sx={{ marginX: 2, marginY: 1 }}>
        <Box
          sx={{
            height: "10rem",
            width: "100%",
            position: "relative",
            borderRadius: "25px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              backgroundColor: "#000000",
              opacity: "50%",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          ></Box>
          <Image
            src="/advertisement.png"
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              position: "absolute",
              paddingLeft: 3,
              paddingRight: 1,
              paddingY: 1,
              height: "30%",
              display: "flex",
              flexDirection: "column",
              top: "25%",
            }}
          >
            <Box>
              <Box>
                <Typography
                  sx={{ fontWeight: "semibold", fontSize: 24, color: "#fff" }}
                >
                  Vendor Advertisement
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#523FAD !important",
                    color: "#fff",
                    borderRadius: "10px",
                    marginTop: 1,
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          {loading ? (
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
                  animation: "spin 1.5s linear infinite",
                }}
              ></Box>
            </Box>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <Box
                key={index}
                sx={{
                  minHeight: "7rem",
                  width: "100%",
                  marginY: 2,
                  backgroundColor: "#EEECF9",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Image
                  src={"/" + event.Pic}
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "37%", borderRadius: "20px" }}
                  onClick={() => router.push(`/dashboard/eventsAsc/${index}`)}
                />
                <Box
                  sx={{
                    width: "63%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingY: 1,
                  }}
                >
                  <Box
                    onClick={() => router.push(`/dashboard/eventsAsc/${index}`)}
                    sx={{
                      marginX: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ color: "#523FAD", fontWeight: "semibold" }}
                    >
                      {event.Date.slice(8, 10) +
                        ", " +
                        numberIntoMonth(Number(event.Date.slice(5, 7))) +
                        " " +
                        event.Date.slice(0, 4)}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {event.ItemTitle}
                    </Typography>
                    <Typography sx={{ color: "#595959" }}>
                      {event.ItemSubject}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      marginX: 2,
                      marginY: 1,
                    }}
                  ></Box>
                </Box>
              </Box>
            ))
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
              <SentimentVeryDissatisfiedIcon
                sx={{ marginX: 8, fontSize: 100 }}
              />
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
