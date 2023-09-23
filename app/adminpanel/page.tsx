"use client";
import { Box, Button, Typography } from "@mui/material";
import RemoveBtn from "@/app/components/RemoveBtn";
import RemovePlan from "@/app/components/RemovePlan";
import RemoveVendor from "@/app/components/RemoveVendor";
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
  _id: number;
  ItemTitle: string;
  ItemSubject: string;
  ItemDescription: string;
  Hallno: string;
  Date: string;
  Time: string;
  Pic: string;
};

type VENDOR = {
  _id: number;
  Name: string;
  Profile: string;
  Description: string;
  Hallno: string;
  Social: string;
  Website: string;
  Pic: string;
};

type PLAN = {
  _id: number;
  Title: string;
  EventName: string;
  Venue: string;
  File: string;
};
const Page = () => {
  const [programmingLoading , setProgrammingLoading] = useState(false);
  const [autographLoading , setAutographLoading] = useState(false);
  const [photoOPSLoading , setPhotoOPSLoading] = useState(false);
  const [vendorLoading , setVendorLoading] = useState(false);
  const [planLoading, setPlanLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [showProgrammingList, setProgrammingList] = useState(false);
  const [showAutographList, setAutographList] = useState(false);
  const [showPhotoOPSList , setPhotosOPSList] = useState(false);
  const [showVendorsList , setVendorsList] = useState(false);
  const [showPlanList , setPlanList] = useState(false);
  const [adminEvent, setAdminEvent] = useState<AdminEvent[]>([]);
  const [autographs, setAutographs] = useState<AdminEvent[]>([]);
  const [photos , setPhotos] = useState<AdminEvent[]>([]);
  const [vendors , setVendors] = useState<VENDOR[]>([]);
  const [plans , setPlans] = useState<PLAN[]>([]);
  const { data: session, status } = useSession();

  interface Details {
    name: string;
    email: string;
  }

  async function handlesSignOut() {
    signOut({ redirect: true, callbackUrl: "/adminLogin" });
  }
  const getAdminEvents = async () => {
    try {
      setProgrammingLoading(true);
      const response = await axios.get("/api/fetchProgram");
      const programs = response.data.allPrograms;
      console.log(programs);
      setAdminEvent(programs);
      setProgrammingList(!showProgrammingList);
      setProgrammingLoading(false);
    } catch (error: any) {
      toast.error("No Events Found!");
    }
  };

  const getAutographEvents = async () => {
    try {
      setAutographLoading(true);
      const response = await axios.get("/api/fetchAutograph");
      const { allAutographs } = response.data;
      setAutographs(allAutographs);
      setAutographList(!showAutographList);
      setAutographLoading(false);
    } catch (error: any) {
      console.log("No Autograph Events Found!");
    }
  };

  const getPhotoOPSEvents = async () => {
    try {
      setPhotoOPSLoading(true);
      const response = await axios.get("/api/fetchPhotoOPS");
      const { allPhotos } = response.data;
      setPhotos(allPhotos);
      setPhotosOPSList(!showPhotoOPSList);
      setPhotoOPSLoading(false);
    } catch (error: any) {
      console.log("No PhotoOPS Events Found!");
    }
  };

  const getVendors = async () => {
    try {
      setVendorLoading(true);
      const response = await axios.get("/api/fetchVendor");
      const {allVendors} = response.data;
      setVendors(allVendors);
      setVendorsList(!showVendorsList);
      setVendorLoading(false);
    } catch (error: any) {
      console.log("No Vendors Found!");
      
    }
  };

  const getPlans = async () => {
    try {
      setPlanLoading(true);
      const response = await axios.get("/api/fetchPlan");
      const {allPlans} = response.data;
      setPlans(allPlans);
      setPlanList(!showPlanList);
      setPlanLoading(false);
    } catch (error: any) {
      console.log("No plans found!");
    }
  }
  const handleEditItem = (item: any) => {
    setSelectedItem(item);
    setEditMode(true);
  };
  const handleCancelEdit = () => {
    // Cancel edit mode and clear the selected item
    setSelectedItem(null);
    setEditMode(false);
  };

  return (
    <Box className="container" sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        className="left"
        sx={{ backgroundColor: "#EEECF9", flex: 0.7, minHeight: "100vh" }}
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
        sx={{ backgroundColor: "#FFF", flex: 3, minHeight: "100vh" }}
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
                {programmingLoading ? (
                  <p>Loading...</p>
                ) : showProgrammingList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showProgrammingList && (
            <Box>
              {adminEvent &&
                adminEvent.map((event) => (
                  <Box
                    key={event._id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography variant="body1" color="initial">
                        {event.ItemTitle}({event.Date})
                      </Typography>
                    </Box>
                    {/* <button  >Edit</button> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button>
                        <Link href={`/editevent/${event._id}`}>Edit</Link>
                      </Button>
                      <Button>
                        {" "}
                        <RemoveBtn id={event._id} />
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}

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
              Autograph Schedule
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <UploadAutograph />
              <Button onClick={() => getAutographEvents()}>
                {autographLoading ? (
                  <p>Loading...</p>
                ) : showAutographList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showAutographList && (
            <Box>
              {autographs &&
                autographs.map((event) => (
                  <Box
                    key={event._id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography variant="body1" color="initial">
                        {event.ItemTitle}({event.Date})
                      </Typography>
                    </Box>
                    {/* <button  >Edit</button> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button>
                        <Link href={`/editSchedule/${event._id}`}>Edit</Link>
                      </Button>
                      <Button>
                        {" "}
                        <RemoveBtn id={event._id} />
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}

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
              Photo Ops Schedule
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
            <UploadPhotoOPS />
            <Button onClick={() => getPhotoOPSEvents()}>
                {photoOPSLoading ? (
                  <p>Loading...</p>
                ) : showPhotoOPSList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showPhotoOPSList && (
            <Box>
              {photos &&
                photos.map((event) => (
                  <Box
                    key={event._id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography variant="body1" color="initial">
                        {event.ItemTitle}({event.Date})
                      </Typography>
                    </Box>
                    {/* <button  >Edit</button> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button>
                        <Link href={`/editPhotoOPS/${event._id}`}>Edit</Link>
                      </Button>
                      <Button>
                        <RemoveBtn id={event._id} />
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
            <UploadVendor />
            <Button onClick={() => getVendors()}>
                {vendorLoading ? (
                  <p>Loading...</p>
                ) : showVendorsList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showVendorsList && (
            <Box>
              {vendors &&
                vendors.map((event) => (
                  <Box
                    key={event._id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography variant="body1" color="initial">
                        {event.Name}({event.Profile})
                      </Typography>
                    </Box>
                    {/* <button  >Edit</button> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button>
                        <Link href={`/editVendors/${event._id}`}>Edit</Link>
                      </Button>
                      <Button>
                        {" "}
                        <RemoveVendor id={event._id} />
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}

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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
            <UploadPlan />
            <Button onClick={() => getPlans()}>
                {planLoading ? (
                  <p>Loading...</p>
                ) : showPlanList ? (
                  "Hide List"
                ) : (
                  "Show List"
                )}
              </Button>
            </Box>
          </Box>
          {showPlanList && (
            <Box>
              {plans &&
                plans.map((event) => (
                  <Box
                    key={event._id}
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography variant="body1" color="initial">
                        {event.Title}({event.Venue})
                      </Typography>
                    </Box>
                    {/* <button  >Edit</button> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button>
                        <Link href={`/editPlan/${event._id}`}>Edit</Link>
                      </Button>
                      <Button>
                        {" "}
                        <RemovePlan id={event._id} />
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Editdetail />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
