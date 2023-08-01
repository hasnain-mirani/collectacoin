"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase, Button, Typography } from "@mui/material";
import { BsFilter, BsBookmark } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";
import { CalendarMonth } from "@mui/icons-material";
import Image from "next/image";
import axios from "axios";
import GoingButton from "@/app/components/GoingButton";

export default function Dashboard() {
  const [activePage, setActivePage] = useState<string>("home");
  const { searchVal, setSearchVal } = useContext(ContextValues);

  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);

  type EVENTS = {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    Hallno: string;
    eventType: string;
    Date: string;
    Time: string;
    Pic: string;
  };

  const [data, setData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const getDetail = async () => {
    const res = await axios.get("api/user/userdata");
    //  console.log(res.data)
    setData(res.data.data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  const [events, setEvents] = useState<EVENTS[]>([]);
  const [d1, setD1] = useState<String>("");
  const [m1, setM1] = useState<String>("");
  const [p1, setP1] = useState<String>("");
  const [t1, setT1] = useState<String>("");
  const [y1, setY1] = useState<String>("");
  const [title1, setTitle1] = useState<String>("");

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
  const getDescEvents = async () => {
    try {
      const response = await axios.get("/api/fetchEventsDesc");
      const { allEvents } = await response.data;

      setEvents(allEvents);
      setM1(allEvents[0].Date.slice(5, 7));
      setD1(allEvents[0].Date.slice(8, 10));
      setP1(allEvents[0].Pic);
      setT1(allEvents[0].ItemTitle || "");
      setY1(allEvents[0].Date.slice(0, 4));
      setTitle1(allEvents[0].ItemTitle || "");
    } catch (error: any) {
      console.log("No Events Found!");
    }
  };
  const [simpleEvents, setSimpleEvents] = useState<EVENTS[]>([]);
  const getAllEvents = async () => {
    try {
      const response = await axios.get("/api/fetchEvents");
      const { allEvents } = await response.data;
      setSimpleEvents(allEvents);
      console.log("Events fetched successfully");
    } catch (error: any) {
      console.log("Failed to fetch events!");
    }
  };

  const handleClick = () => {
    simpleEvents.map((event, index) => {
      {
        title1 === event.ItemTitle && router.push(`/dashboard/events/${index}`);
      }
    });
  };

  useEffect(() => {
    getDescEvents();
  }, []);

  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        p: 1,
      }}
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

            alignItems: "center",
            width: "100vw",
            padding: 1,
          }}
        >
          <Side />
          <Typography
            sx={{
              color: "#523FAD",
              fontSize: "26px",
              fontWeight: 600,
              marginX: 8,
            }}
          >
            DASHBOARD
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 1, marginLeft: 1 }}>
        <Typography sx={{ color: "#000", fontSize: " 30px", fontWeight: 600 }}>
          Hey, {data.firstName}
        </Typography>
        <Typography sx={{ color: "#595959", fontSize: "18px", width: "80vw" }}>
          Don’t forget to visit your nearest events that you have subscribe at
          this week.
        </Typography>
      </Box>
      <Box sx={{ overflowX: "scroll", width: "100%" }}>
        <Box sx={{ display: "flex", maxWidth: "500px", margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              marginLeft: 2,
              marginY: 2,
              position: "relative",
              borderRadius: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "120px",
                borderRadius: "30px",
                background: "#EEECF9",
              }}
            >
              <Image
                src="/allevent.png"
                width={60}
                height={60}
                alt=""
                onClick={() => {
                  router.push("/dashboard/events");
                }}
              />
              <Typography sx={{ color: "#523FAD" }}>All Events</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "120px",
                borderRadius: "30px",
                background: "#EEECF9",
              }}
            >
              <Image
                src="/autograph.png"
                width={60}
                height={60}
                alt=""
                onClick={() => {
                  router.push("/dashboard/autographs");
                }}
              />
              <Typography sx={{ color: "#523FAD" }}>Autograph</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "120px",
                borderRadius: "30px",
                background: "#EEECF9",
              }}
            >
              <Image
                src="/camera.png"
                height={60}
                width={60}
                alt=""
                onClick={() => {
                  router.push("/dashboard/PhotoOPS");
                }}
              />
              <Typography sx={{ color: "#523FAD" }}>Photo OPS</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "120px",
                borderRadius: "30px",
                background: "#EEECF9",
              }}
            >
              <Image
                src="/Programming.png"
                height={60}
                width={60}
                alt=""
                onClick={() => {
                  router.push("/dashboard/Programming");
                }}
              />
              <Typography sx={{ color: "#523FAD" }}>Programing</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          paddingX: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100vw",
            p: 2,
          }}
        >
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
            Upcoming Events
          </Typography>
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
            {m1 + "/" + d1}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "350px",
            height: "250px",
            backgroundImage: `url(${p1})`,
            borderRadius: "30px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              marginY: 20,
              marginX: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            onClick={handleClick}
          >
            <Box sx={{ display: "flex" }}>
              <CalendarMonth sx={{ color: "#fff" }} />
              <Typography
                sx={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}
              >
                {numberIntoMonth(Number(m1)) + " " + d1 + ", " + y1}
              </Typography>
            </Box>
            <Box sx={{ color: "#fff", fontSize: "22px", fontWeight: 500 }}>
              {t1}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          p: 2,
        }}
      >
        <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          Upcoming Events
        </Typography>
        <Typography
          sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}
        ></Typography>
      </Box>
      {events.map((eve, index) => (
        <Box sx={{ marginX: 1 }}>
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              
            >
              <Typography
                sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}
              >
                {eve.Date.slice(8, 10)}
              </Typography>
              <Typography
                sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}
              >
                {numberIntoMonth(Number(eve.Date.slice(5, 7)))}
              </Typography>
            </Box>
            <Box onClick={() => router.push(`/dashboard/eventsAscUser/${index}`)}>
              <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                {eve.ItemTitle}
              </Typography>
              <Typography
                sx={{ color: "#595959", fontSize: "14px", fontWeight: 500 }}
              >
                70 going 13 interested
              </Typography>
            </Box>
            <Box>
              <GoingButton
                ItemTitle={eve.ItemTitle}
                Date={eve.Date}
                Time={eve.Time}
                Pic={eve.Pic}
                Hallno={eve.Hallno}
                ItemSubject={eve.ItemSubject}
                ItemDescription={eve.ItemDescription}
              />
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      ></Box>
    </Box>
  );
}
