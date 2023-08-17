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
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

type props = {
  id: number;
  ItemTitle: string;
  Date: string;
  Time: string;
  Pic: string;
  Hallno: string;
  ItemSubject: string;
  ItemDescription: string;
};
const Index = ({
  id,
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

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [btnState, setBtnState] = useState<number>();

  const getButtonStates = async () => {
    try {
      const response = await axios.get("/api/fetchPhotoButton");
      const { buttonStates } = await response.data;
      setBtnState(buttonStates[Number(id)].state);
    } catch (error: any) {
      console.log("Unable to fetch button state");
    }
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
    btnState === 1 ? setBtnState(0) : setBtnState(1);
  };

  type buttonNumberType = {
    buttonNumber: number;
  };

  const [buttonNumber, setButtonNumber] = useState<buttonNumberType>({
    buttonNumber: Number(id),
  });

  const buttonState = async () => {
    try {
      await axios.post("/api/buttonStatePhoto", buttonNumber);
      console.log("Saved State");
    } catch (error: any) {
      console.error("State not saved");
    }
  };
  useEffect(() => {
    getButtonStates();
  });

  return (
    <Button
      onClick={() => {
        updateMySchedule();
        handleClick();
        buttonState();
      }}
    >
      {btnState === 1  ? (
        <Button
          sx={{
            backgroundColor: "#523FAD !important",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Added
          <DoneOutlineIcon  />
        </Button>
       
      ) : (
        <Button
          sx={{
            backgroundColor: "#523FAD !important",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          Add to Schedule
        </Button>
      )}
    </Button>
  );
};

export default Index;
