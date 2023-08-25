"use client";
import { Box, Typography, InputBase, IconButton, Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { BsFilter, BsBookmark } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ContextValues } from "@/app/Context/context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

type AutoGraphScheduleType = {
  time: String;
  substitle: String;
  name: String;
};

const AutographPage = () => {
  const { searchVal, setSearchVal } = useContext(ContextValues);
  const router = useRouter();
  const [autographs, setAutographs] = useState<AutoGraphScheduleType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  useEffect(() => {
    getData(searchVal, currentPage, limit);
  }, [searchVal, limit, currentPage]);
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

  type AUTOGRAPH = {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    eventType: string;
    Date: string;
    Time: string;
    Pic: string;
  };

  const [autograph, setAutograph] = useState<AUTOGRAPH[]>([]);
  const getAutographs = async () => {
    try {
      const response = await fetch("/api/fetchAutograph", {
        next: { revalidate: 10 },
      });
      const { allAutographs } = await response.json();
      setAutograph(allAutographs);
      console.log("Autographs has been fetched successfully!");
    } catch (error: any) {
      console.log("Autographs Not Found!");
    }
  };

  useEffect(() => {
    getAutographs();
  }, []);

  const [loading, setLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate loading for 10 seconds
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
          router.push("/userdashboard");
        }}
      />
      <Box sx={{ padding: 1.5, backgroundColor: "#fff", height: 705 }}>
        <Box>
          <Box sx={{ margin: 0.5 }}>
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
            ) : autograph.length > 0 ? (
              autograph.map((auto, index) => (
                <Box key={index}>
                  {/* mapped elements */}
                  <Box
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
                      src={"/" + auto.Pic}
                      alt="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "37%",
                        height: "100%",
                        borderRadius: "20px",
                      }}
                      onClick={() =>
                        router.push(`/dashboard/autographs/${index}`)
                      }
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
                          marginLeft: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          paddingTop: 2,
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: "bold" }}
                          onClick={() =>
                            router.push(`/dashboard/autographs/${index}`)
                          }
                        >
                          {auto.ItemTitle}
                        </Typography>
                        <Typography sx={{ color: "#595959" }}>
                          {auto.ItemSubject}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          marginX: 1,
                          marginY: 1,
                        }}
                      >
                        <Typography sx={{ color: "#595959" }}>Time</Typography>
                        <Typography sx={{ color: "#523FAD", fontSize: 12 }}>
                          {auto.Time}
                        </Typography>
                      </Box>
                    </Box>
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
                      sx={{
                        fontWeight: "semibold",
                        fontSize: 24,
                        color: "#fff",
                      }}
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
      </Box>
    </>
  );
};
export default AutographPage;
