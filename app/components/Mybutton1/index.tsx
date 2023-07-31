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
  // useEffect(() => {
  //   // Retrieve the state from local storage when the component mounts
  //   const storedState = localStorage.getItem("isClicked");
  //   setIsClicked(storedState === "true");
  // }, []);

  // useEffect(() => {
  //   // Store the state in local storage whenever it changes
  //   localStorage.setItem("isClicked", JSON.stringify(isClicked));
  // }, [isClicked]);

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

  return (
    <Button
      sx={{
        backgroundColor: "#523FAD !important",
        color: "#fff",
        borderRadius: "8px",
      }}
      onClick={() => {
        updateMySchedule();
      }}
    >
      Add to Schedule
    </Button>
  );
};

export default Index;
