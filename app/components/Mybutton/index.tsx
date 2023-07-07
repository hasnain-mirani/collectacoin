'use client'
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp';
import { useState } from "react";
import { increment, decrement } from "@/state/counterSlice";
import { IconButton } from "@mui/material";
import { useDispatch} from "react-redux";

const Index = () => {
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <IconButton onClick={handleClick} >
                {isClicked ? (
        <BookmarkBorderOutlinedIcon onClick={() => dispatch(increment())} />
      ) : (
        <BookmarkAddedSharpIcon  onClick={() => dispatch(decrement())} />
      )}
          
                </IconButton>
  )
}

export default Index