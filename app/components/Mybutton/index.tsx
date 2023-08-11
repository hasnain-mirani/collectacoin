"use client";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";
import { useState, useEffect } from "react";
import { increment, decrement } from "@/state/counterSlice";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";

type props = {
  index: number;
  ItemTitle: string;
  Date: string;
  Time: string;
  Pic: string;
  Hallno: string;
  ItemSubject: string;
  ItemDescription: string;
};
const Index = ({
  index,
  ItemTitle,
  Date,
  Time,
  Pic,
  Hallno,
  ItemSubject,
  ItemDescription,
}: props) => {
  const [isClicked, setIsClicked] = useState(false);
  let [getBtnState, setBtnState] = useState<number>(0);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsClicked(!isClicked);
    setBtnState(getBtnState === 1 ? 0 : 1);
  };

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

  type buttonNumberType = {
    buttonNumber: number;
  };

  const [buttonNumber, setButtonNumber] = useState<buttonNumberType>({
    buttonNumber: index,
  });

  const buttonState = async () => {
    try {
      await axios.post("/api/buttonState", buttonNumber);
    } catch (error: any) {
      console.error("Not Saved");
    }
  };

 

  const getButtonState = async () => {
    try {
      const response = await axios.get("/api/fetchButtonState");
      const { buttonStates } = await response.data;
      setBtnState(buttonStates[index].state);
    } catch (error: any) {
      console.error("Error Fetching Button State");
    }
  };

  useEffect(() => {
    getButtonState();
  }, []);

  return (
      <IconButton
        onClick={() => {
          handleClick();
          updateMySchedule();
          buttonState();
          toast.success(`Event of index ${index} is clicked`);
        }}
      >
        {getBtnState === 1 ?  (
          <BookmarkAddedSharpIcon
            onClick={() => {
              dispatch(increment()), setEvent({ ...event, state: 1 });
            }}
          />
        ) : (
          <BookmarkBorderOutlinedIcon
            onClick={() => {
              dispatch(decrement()), setEvent({ ...event, state: 0 });
            }}
          />
        )}
      </IconButton>

  );
};

export default Index;
