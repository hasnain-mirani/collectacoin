"use client";
import { Box, Button, Typography } from "@mui/material";
import RemvoveBtn from '@/app/components/RemoveBtn'
import { signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import UpoloadData from "../components/uploddata";
import UploadVendor from "@/app/components/uploadVendorData";
import UploadPhotoOPS from "@/app/components/uploadPhotoOPS";
import UploadPlan from "@/app/components/uploadFloorPlan";
import Editdetail from "@/app/components/editdetail";
import { useEffect, useState } from "react";
import { Dashboard, Delete, Edit } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import axios from "axios";
import router from "next/router";
import UploadAutograph from "@/app/components/uploadAutograph";
import { BsEye } from "react-icons/bs";
import editData from "../components/editData";
import Link from "next/link";
type AdminEvent = {
  _id:number;
  ItemTitle: string;
  ItemSubject: string;
  ItemDescription: string;
  Hallno: string;
  Date: string;
  Time: string;
  Pic: string;
};
const Page = () => {
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showList, setShowList] = useState(false);
  const [adminEvent, setAdminEvent] = useState<AdminEvent[]>([]);
  const { data: session, status } = useSession();
  // useEffect(() => {
  //   getAdminEvents();
  // }, []);
  // console.log(session)
  interface Details {
    name: string;
    email: string;
    // Add more details fields as needed
  }

  async function handlesSignOut() {
    signOut({ redirect: true, callbackUrl: "/adminLogin" });
  }
  const getAdminEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/fetchProgram");
      const programs = response.data.allPrograms;
      console.log(programs)
      setAdminEvent(programs);
      setShowList(!showList);
      setLoading(false);
    } catch (error: any) {
      toast.error("No Events Found!");
    }
  };
  const handleEditItem = (item: any) => {
    setSelectedItem(item);
    setEditMode(true);
  };
  const handleCancelEdit = () => {
    // Cancel edit mode and clear the selected item
    setSelectedItem(null);
    setEditMode(false);
  };
  const handleDeleteItem = (item: any) => {
    // Implement the logic to delete an item here.
    // Once the item is deleted, update the state accordingly.
  };
  // const [programingData, setProgramingData] = useState<any>(null);
  // const [autographData, setAutographData] = useState<any>(null);

  // const [details, setDetails] = useState<Details>({
  //   name: "",
  //   email: "",
  // });
  // const [isEditing, setIsEditing] = useState(false);

  return (
    <Box className="container" sx={{ display: "flex", flexDirection: "row" }}>
   <Box
        className="left"
        sx={{ backgroundColor: "#EEECF9", flex: 0.7, height: "100vh" }}
      >
       
        <Box sx={{ padding: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ width: 56, height: 56 }}>
              {session?.user?.image}
            </Avatar>
            <Box sx={{ marginX: 1 }}>
              <Typography variant="h6">{session?.user?.name}</Typography>
              <Typography>{session?.user?.email}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: 1,
              justifyContent: "center",
              display: "flex",
              gap: 1,
              alignItems: "center",
              marginTop: "1rem",
              ":hover": { backgroundColor: "#523FAD33" },
            }}
          >
            <Dashboard />
            <Typography>Dashboard</Typography>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                handlesSignOut();
              }}
            >
              signOut
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        className="right"
        sx={{ backgroundColor: "#FFF", flex: 3, height: "100vh" }}
      >
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Programming Schedule
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <UpoloadData />
              <Button onClick={() => getAdminEvents()}>
                {loading ? (
                  <p>Loading...</p>
                ) : showList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showList && (
            <Box>
              {adminEvent &&
                adminEvent.map((event) => (
                    <Box
                    key={event._id} 
                      sx={{
                        display: "flex",
                        gap: 3,
                       justifyContent:'space-between'
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Typography variant="body1" color="initial">
                          {event.ItemTitle}({event.Date})
                        </Typography>
                      </Box>
                      {/* <button  >Edit</button> */}
                     <Box sx={{display:'flex', gap:2}}>
                      <Button>
                     <Link href={`/editevent/${event._id}`}>Edit</Link>
                      </Button>
                    <Button> <RemvoveBtn id={event._id}/></Button>
                     </Box>
                    </Box>
                ))}
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Autograph Schedule
              </Typography>
              <UploadAutograph />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Editdetail />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Photo Ops Schedule
            </Typography>
            <UploadPhotoOPS />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Add Vendor
            </Typography>
            <UploadVendor />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Create Floorplan
            </Typography>
            <UploadPlan />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
