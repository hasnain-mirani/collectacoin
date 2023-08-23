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
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
type props = {
  index: number;
  ItemTitle: string;
  Date: string;
  Time: string;
  Pic: string;
  eventType: string;
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
  eventType,
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

  const [ind, setInd] = useState<number | undefined>(undefined);
  const [states, setStates] = useState<number>(0);

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

  const getState = async () => {
    if (eventType === "Autograph") {
      try {
        const response = await axios.get("/api/fetchButtonState");
        const { buttonStates } = await response.data;
        ind && setStates(buttonStates[ind]?.state || 0);
      } catch (error: any) {
        console.log(error.message);
      }
    } else if (eventType === "PhotoOPS") {
      try {
        const response = await axios.get("/api/fetchPhotoButton");
        const { buttonStates } = await response.data;
        ind && setStates(buttonStates[ind]?.state || 0);
      } catch (error: any) {
        console.log(error.message);
      }
    } else if (eventType === "Programming") {
      try {
        const response = await axios.get("/api/fetchProgramButton");
        const { buttonStates } = await response.data;
        ind && setStates(buttonStates[ind]?.state);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const getIndex = async () => {
    if (eventType === "Autograph") {
      try {
        const response = await axios.get("/api/fetchAutograph");
        const { allAutographs } = await response.data;
        allAutographs.map((eve: scheduledEvent, index: number) => {
          if (eve.ItemTitle === ItemTitle) {
            setInd(index);
            getState();
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    } else if (eventType === "PhotoOPS") {
      try {
        const response = await axios.get("/api/fetchPhotoOPS");
        const { allPhotos } = await response.data;
        allPhotos.map((eve: scheduledEvent, index: number) => {
          if (eve.ItemTitle === ItemTitle) {
            setInd(index);
            getState();
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    } else if (eventType === "Programming") {
      try {
        const response = await axios.get("/api/fetchProgram");
        const { allPrograms } = await response.data;
        allPrograms.map((eve: scheduledEvent, index: number) => {
          if (eve.ItemTitle === ItemTitle) {
            setInd(index);
            getState();
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getIndex();
  }, [ind]);

  return (
    <Button
      variant="outlined"
      sx={{ border: "2px solid #523FAD", borderRadius: "30px  " }}
    >
      {states === 1 ? (
        <Typography
          sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}
        >
          Going  <CheckSharpIcon/>
        </Typography>
       
      ) : (
        <Typography
          sx={{ color: "#523FAD", fontSize: "20px", fontWeight: 600 }}
        >
          Going <CloseSharpIcon />
        </Typography>
      )}
    </Button>
  );
};

export default Index;
