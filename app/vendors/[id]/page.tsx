"use client";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Router, WindowSharp } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  return (
    <>
      <ArrowBackIcon
        sx={{ marginLeft: "15px" }}
        onClick={() => {
          router.push("/vendors");
        }}
      />

      <Box sx={{ padding: 2, backgroundColor: "#fff", height: 843 }}>
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
        <Box></Box>
      </Box>
    </>
  );
};
export default VendorData;
