"use client";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { BsFilter, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  return (
    <Box sx={{display: "flex", flexDirection: "column", backgroundColor: "#fff"}}>
        
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p:4,
          gap: 2,
        }}
      >
        <Box sx={{}}>
          <InputBase
            placeholder="Search"
            endAdornment={
              <CiSearch size="1.3em" style={{ marginRight: "10px" }} />
            }
            sx={{
              backgroundColor: "#EEECF9",
              borderRadius: "20px",
              width: "17rem",
              paddingLeft: 4,
              paddingY: 0.5,
            }}
          />
        </Box>
        <Box sx={{}}>
          <IconButton
            sx={{ backgroundColor: "#EEECF9 !important", borderRadius: "10px" }}
          >
            <BiPlus color="#523FAD" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{backgroundColor:'#EEECF9'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>TCG Cards</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Wizardwear</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Rotterdam Comics</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Gamebros</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Funkostop</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      </Box> 
      <Box sx={{marginTop:4,backgroundColor:'#EEECF9'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Gamebros</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Funkostop</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Funko on Wheels</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
      </Box>
        </Box>
         <Box sx={{marginTop:4,backgroundColor:'#EEECF9'}}>
      <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D9D9D9',}} onClick={()=> router.push("/vendors/1")}>
        <Typography sx={{p:2}}>Speedy Toys</Typography>
        <Typography sx={{p:2}}>HALL 2</Typography>
        
      </Box>
     
        </Box> 
    </Box>
  );
};

export default Page;