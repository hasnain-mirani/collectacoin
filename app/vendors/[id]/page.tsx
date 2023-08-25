"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Router, WindowSharp } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const VendorData = () => {
  const router = useRouter();
  const [Name, setName] = useState<string>("");
  const [Profile, setProfile] = useState<string>("");
  const [Desc, setDesc] = useState<string>("");
  const [Pic, setPic] = useState<string>("");
  const [Social, setSocial] = useState<string>("");
  const [Website, setWebsite] = useState<string>("");
  const [Hallno, setHallNo] = useState<string>("");

  const getVendors = async (id: number) => {
    try {
      const response = await axios.get("/api/fetchVendor");
      const { allVendors } = response.data;

      setDesc(allVendors[Number(id)].Description || "");
      setProfile(allVendors[Number(id)].Profile || "");
      setPic(allVendors[Number(id)].Pic || "");
      setHallNo(allVendors[Number(id)].Hallno || "");
      setName(allVendors[Number(id)].Name || "");
      setSocial(allVendors[Number(id)].Social || "");
      setWebsite(allVendors[Number(id)].Website || "");
      console.log(allVendors[Number(id)].Social);
    } catch (error) {
      console.log(`Vendor ${id} not found`);
    }
  };

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    getVendors(Number(id));
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
    <Box sx={{ padding: 2, backgroundColor: "#fff", height: 843 }}>
      <Box sx={{ padding: 1 }}>
        <ArrowBackIcon
          onClick={() => {
            router.push("/vendors");
          }}
        />
      </Box>
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
      ) : Pic || Name || Desc || Social || Profile || Website ? (
        <>
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              {Name}
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
                {Profile}
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
              gap: 2,
            }}
          >
            <Button
              href={"/" + Social}
              sx={{
                backgroundColor: "#523FAD !important",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Social
            </Button>
            <Button
              href={Website}
              sx={{
                backgroundColor: "#523FAD !important",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Website
            </Button>
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
      <Box></Box>
    </Box>
  );
};
export default VendorData;
