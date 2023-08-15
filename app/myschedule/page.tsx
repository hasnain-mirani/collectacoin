"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase, Button, Typography, IconButton } from "@mui/material";
import { BsFilter, BsBookmark } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";
import { ArrowBack, CalendarMonth, Search } from "@mui/icons-material";
import Items from "@/app/components/Items";
import axios from "axios";
import toast from "react-hot-toast";

export default function RootLayout(){
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();
  interface Event {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    Hallno: string;
    Date: string;
    Time: string;
    count: number;
    state: number;
    Pic: string;
  }


  const [events, setEvents] = useState<Event[]>([]);

  async function getEvent() {
    try {
      const response = await axios.get("/api/trackEvents");
      const { trackEvents } = await response.data;
      setEvents(trackEvents);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  // async function deleteEvent(eventName : String) {
  //   try {
  //     getEvent();
  //     await axios.delete(`/api/deleteEvent?name=${eventName}`);
  //     setEvents((prevEvents) =>
  //       prevEvents.filter((event) => event.ItemTitle !== event.ItemTitle)
  //     );
  //   } catch (error: any) {
  //     toast.error("Error Deleting Event");
  //   }
  // }

  const [activePage, setActivePage] = useState<string>("home");
  console.log(pathname);
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);
  useEffect(() => {
    getEvent();
    
  }, []);

  // useEffect(() => {
  //   // Filter out expired events and automatically delete them
  //   events.forEach((event) => {
  //     const day: String = event.Date.substring(0, 2);
  //     const month: String = event.Date.substring(3, 5);
  //     const year: String = event.Date.substring(6, 10);
  //     const endHour: String = event.Time.substring(6, 8);
  //     const endMin: String = event.Time.substring(9, 11);

  //     const isExpired =
  //       Number(day) === new Date().getDate() &&
  //       Number(month) === new Date().getMonth() + 1 &&
  //       Number(year) === new Date().getFullYear() &&
  //       (Number(endHour) < new Date().getHours() ||
  //         (Number(endHour) === new Date().getHours() &&
  //           Number(endMin) <= new Date().getMinutes()));

  //     if (isExpired) {
  //       deleteEvent(event.ItemTitle);
  //     }
  //   });
  // }, [events]);


  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginY: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            width: "100vw",
            padding: 1,
          }}
        >
          <IconButton onClick={() => router.push("/userdashboard")}>
            <ArrowBack />
          </IconButton>
          <Typography
            sx={{
              color: "#523FAD",
              fontSize: "26px",
              fontWeight: 600,
              marginX: 2,
            }}
          >
            Schedule
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", p: 1, justifyContent: "space-between" }}>
        <Side />
        <InputBase
          fullWidth
          placeholder="Search"
          endAdornment={
            <CiSearch size="1.3em" style={{ marginRight: "10px" }} />
          }
          sx={{
            backgroundColor: "#EEECF9",
            borderRadius: "20px",
            paddingLeft: 4,
            paddingY: 0.5,
          }}
        />
      </Box>

      <Box>
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              minHeight: "6rem",
              marginY: 2,
              backgroundColor: "#EEECF9",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
              margin: 1,
            }}
          >
            <img
              src={event.Pic}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "37%", height: "100%", borderRadius: "20px" }}
            />
            <Box
              sx={{
                width: "63%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 2,
                  paddingY: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  {event.ItemTitle}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      gap: 0.5,
                    }}
                  >
                    <Typography sx={{ color: "#595959", fontSize: 14 }}>
                      Date
                    </Typography>
                    <Typography sx={{ color: "#523FAD", fontSize: 12 }}>
                      {event.Date}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      gap: 0.5,
                    }}
                  >
                    <Typography sx={{ color: "#595959", fontSize: 14 }}>
                      Time
                    </Typography>
                    <Typography sx={{ color: "#523FAD", fontSize: 12 }}>
                      {event.Time}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginX: 1,
                  marginY: 1,
                  alignItems: "flex-start",
                }}
              >
                <Button variant="contained" sx={{ borderRadius: "10px" }}>
                  {event.count}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      ></Box>
    </Box>
  );
}
