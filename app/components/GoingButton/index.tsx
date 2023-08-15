"use client";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";
import { useState, useEffect } from "react";
import { increment, decrement } from "@/state/counterSlice";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";

type props = {
  ItemTitle: string;
  Date: string;
  Time: string;
  Pic: string;
  Hallno: string;
  ItemSubject: string;
  ItemDescription: string;
};
const Index = ({
  ItemTitle,
  Date,
  Time,
  Pic,
  Hallno,
  ItemSubject,
  ItemDescription,
}: props) => {
 
  type scheduledEvent = {
    ItemTitle: string;
    ItemSubject: string;
    ItemDescription: string;
    Hallno: string;
    Date: string;
    Time: string;
    count: number;
    state: number;
    Pic: string;
  };

  const [event, setEvent] = useState<scheduledEvent>({
    ItemTitle: ItemTitle,
    ItemSubject: ItemSubject,
    ItemDescription: ItemDescription,
    Hallno: Hallno,
    Date: Date,
    Time: Time,
    count: 0,
    state: 0,
    Pic: Pic,
  });

  const updateMySchedule = async () => {
    try {
      await axios.post("/api/event", event);
      toast.success("Posted Successfully");
    } catch (error: any) {
      console.log(error);
      console.error("Posting failed");
    }
  };

  const handleClick = () => {

  }

  const getButtonStates = async () => {
    try {
      const response = await axios.get("/api/fetchButtonState");
      
    } catch (error: any) {
      console.log("Unable to fetch button states");
      
    }
  }

  return (
    <Button
      onClick={() => {
        updateMySchedule();
        handleClick();
      }}
      variant="outlined"
      sx={{ border: "2px solid #523FAD", borderRadius: "30px  " }}
    >
      <Typography sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}>
        Going
      </Typography>
    </Button>
  );
};

export default Index;
