"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "@/constants";
import toast from "react-hot-toast";
type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreed: boolean;
};
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputBase,
  Typography,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Page = ({params}:any) => {
  const router = useRouter();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  })
  const [formValues, setFormValues] = useState<FormValuesType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const [disableButton, setdisableButton] = useState(true);
  async function handleValuesChange(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    let value = e.target.value;
    setUser((pre) => ({ ...pre, [name]: value }));
  }
  useEffect(() => {
    if (
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.agreed === true
    ) {
      setdisableButton(false);
    } else {
      setdisableButton(true);
    }
  }, [user]);
const onSignup=async()=>{
  try {
    const resp=await axios.post("api/", user);
    // console.log('sign in succes', resp.data)
   
  } catch (error) { 
    toast.error('error in posting');
  }
 
}
const userid =params.id
  async function handleSubmit() {
    try {
      let response = await axios.post('api/user/signup', user);
      router.push('/signin')
      toast.success("Successfully Signed Up");
    } catch (err: any) {
      toast.error('err in connection  ');
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        backgroundColor: "#fff",
        height: "100dvh",
        width: "100dwh",
        padding: 2,
      }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
          paddingTop: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            gap: 1,
            paddingX: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Sign Up
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>
              First Name
            </Typography>
            <InputBase
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
              }}
              name="firstName"
              value={user.firstName}
              required
              placeholder="example@emai.com"
              onChange={handleValuesChange}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>Last Name</Typography>
            <InputBase
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
              }}
              name="lastName"
              value={user.lastName}
              required
              placeholder="example@emai.com"
              onChange={handleValuesChange}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>Email</Typography>
            <InputBase type="email"
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
              }}
              name="email"
              required
              value={user.email}
              placeholder="example@emai.com"
              onChange={handleValuesChange}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>Password</Typography>
            <InputBase type="password"
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
                marginTop: 1,
              }}
              name="password"
              value={user.password}
              required
              placeholder="*******"
              onChange={handleValuesChange}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", width: "17rem", fontSize: "13px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Checkbox
              sx={{ color: "#523FAD !important" }}
              onChange={(e) =>
                setUser((pre) => ({ ...pre, agreed: e.target.checked }))
              }
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px" }}>
              I agree to the{" "}
              <a href="" style={{ color: "#523FAD" }}>
                Term of Services
              </a>{" "}
              and{" "}
              <a href="" style={{ color: "#523FAD" }}>
                Privacy Polic
              </a>
              y.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#523FAD !important",
              color: "#FFFFFF",
              borderRadius: "10px",
              width: "14rem",
            }}
            type="submit"
            onClick={() => handleSubmit()}
            disabled={disableButton}
          >
            {disableButton ? "please fill the detail" : "Submit"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {" "}
          <Typography>
            Have an account
            <button
              style={{ color: "#523FAD", marginLeft: 4 }}
              onClick={() => router.push("/signin")}
            >
              Sign In
            </button>
          </Typography>
        </Box>
      </Box>
    </Box>
    // <div className="h-screen bg-white">
    //   <div className="p-8">
    //     <div>
    //          <p className="text-2xl font-semibold font-roboto">Sign Up</p>
    //     </div>
    //     <div className='mt-8 flex flex-col gap-2'>
    //       <div className='w-full my-3 flex flex-col gap-2'>
    //         <p className="font-roboto text-primary font-medium">Email</p>
    //         <input name="email" onChange={handleValuesChange} value={formValues.email} className="border-b-2 border-gray-200 border-t-0 border-r-0 border-l-0 outline-none w-full" placeholder='Your email address' />
    //       </div>
    //       <div className='w-full my-3 flex flex-col gap-2'>
    //         <p className="text-primary font-medium">Password</p>
    //         <input name="password" placeholder='Your Password' onChange={handleValuesChange} value={formValues.password} className="border-b-2 border-gray-200 border-t-0 border-r-0 border-l-0  outline-none w-full" />
    //       </div>
    //       <div className='flex flex-row justify-center gap-2'>
    //           <input className='accent-red-500 w-5' id="agreed" type="checkbox" checked={formValues.agreed} onChange={(e)=> setFormValues(pre=> ({...pre, agreed: e.target.checked}))} />
    //           <label htmlFor='agreed' className='pt-4' >I agree to <span className='text-red-500 text-semibold'>Terms of Service</span> and <span className='text-red-500 text-semibold'>Privacy Policy</span></label>
    //       </div>

    //       <button className='bg-primary text-white rounded-md py-3 mt-6 shadow-md' onClick={handleSubmit}>Continue</button>
    //       <div className='flex flex-row justify-center mt-4'>
    //         <p className='text-gray-500 font-medium'>
    //           Have an Account? <span className="text-primary">Sign In</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Page;
