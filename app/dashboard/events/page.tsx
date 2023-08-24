"use client";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ContextValues } from "@/app/Context/context";
import Mybutton from "../../components/Mybutton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import toast from "react-hot-toast";
import "@/app/styles/style.css";
const EventsPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const dispatch = useDispatch();
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const router = useRouter();
  const [events, setEvents] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  useEffect(() => {
    getData(searchVal, currentPage, limit);
  }, [searchVal, limit, currentPage]);
  async function getData(search: string, page: number, limit: number) {
    let res = await axios.get("http://localhost:8000/api/events", {
      params: {
        search,
        page,
        limit,
      },
    });
    console.log(res.data);
    setEvents(res.data);
  }

  type AdminEvent = {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    Hallno: string;
    Date: string;
    Time: string;
    Pic: string;
  };

  const [adminEvent, setAdminEvent] = useState<AdminEvent[]>([]);
  const getAdminEvents = async () => {
    try {
      const response = await axios.get("/api/fetchEvents");
      const { allEvents } = await response.data;
      setAdminEvent(allEvents);
      toast.success("Events Found!");
    } catch (error: any) {
      toast.error("No Events Found!");
    }
  };

  useEffect(() => {
    getAdminEvents();
  }, []);

  return (
    <>
      <ArrowBackIcon
        sx={{ marginLeft: "15px" }}
        onClick={() => {
          router.push("/userdashboard");
        }}
      />
      <Box>
        <Box sx={{ marginX: 2, marginY: 1 }}>
          <Box>
            {adminEvent.length > 0 ? (
              adminEvent.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    height: "7rem",
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
                    style={{
                      width: "37%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                    onClick={() => router.push(`/dashboard/events/${index}`)}
                  />
                  <Box
                    sx={{
                      width: "63%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: 2,
                        paddingY: 2,
                      }}
                      onClick={() => router.push(`/dashboard/events/${index}`)}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {event.ItemTitle}
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                      >
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
                      }}
                    ></Box>
                  </Box>
                </Box>
              ))
            ) : (
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
                    animation: "s1 1s infinite",
                  }}
                ></Box>
              </Box>
            )}
          </Box>

          {/* advertisement */}
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
          {/* advertisement */}
        </Box>
      </Box>
    </>
  );
};
export default EventsPage;
