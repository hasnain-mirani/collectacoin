"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { signIn, useSession } from "next-auth/react";
import { BiHide, BiShow } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, InputBase, Typography } from "@mui/material";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

type FormValuesType = {
  email: string;
  password: string;
  agreed: boolean;
};

const Page = () => {
  
  const router = useRouter();
  const onSignup = () => {
    router.push("/");
  };

  const onlogin = async () => {
    {
      try {
        const response = await axios.post("/api/user/signin", formValues);
        const { token, firstName, email } = response.data;
       
        localStorage.setItem("token", token);
        localStorage.setItem("name", firstName);
        localStorage.setItem("email", email);
        // console.log(response)
        //  console.log("signin successfull", response.data)
        toast.success("Successfully Signed in");
        router.push("/userdashboard");
      } catch (error: any) {
        //  console.log('login failed', error.message)
        toast.error("Email or password is incorrect ", error.message);
      }
      }
      
    
    
  }
  const { data: session, status } = useSession()
  console.log(status)
  if (status==='authenticated') {
   
  }
  const [formValues, setFormValues] = useState<FormValuesType>({
    email: "",
    password: "",
    agreed: true,
  });
 
  

 

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  async function handleValuesChange(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    let value = e.target.value;

    setFormValues((pre) => ({ ...pre, [name]: value }));
  }
  async function handleGoogleSignIn() {
  
      signIn("google", { redirect: true, callbackUrl: "/userdashboard" });
 
    
  }
  async function handleFacebookSignIn() {
    signIn("facebook2", { redirect: true, callbackUrl: "/userdashboard" });
  }
  async function handleCredentialSignIn() {
    await signIn("credentials", { ...formValues, redirect: false }).then(
      ({ ok, error }: any) => {
        if (error) {
          setError(error);
        } else {
          router.push("/dashboard");
        }
      }
    );
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image src="/logo.png" height={0} width={400} alt="" />
      </Box>

      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
          paddingTop: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              paddingX: 1,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Sign In
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              paddingX: 1,
            }}
          >
            <Typography sx={{ fontSize: 15, marginLeft: 0.5 }}>
              Hi there! Nice to see you again.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingX: 1,
          }}
        >
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>Email</Typography>
            <InputBase
              onChange={handleValuesChange}
              name="email"
              value={formValues.email}
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
                marginTop: 1,
              }}
              required
              placeholder="example@email.com"
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#523FAD", p: 0.5 }}>Password</Typography>
            <InputBase
              onChange={handleValuesChange}
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              sx={{
                backgroundColor: "#EEECF9",
                borderRadius: "15px",
                width: "20rem",
                paddingLeft: 4,
                paddingY: 0.5,
                marginTop: 1,
              }}
              required
              placeholder="*******"
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#523FAD !important",
              color: "#FFFFFF",
              borderRadius: "10px",
              paddingY: 1,
              fontSize: "lg",
              width: "16rem",
            }}
            type="submit"
            onClick={onlogin}
          >
            Sign In
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#2B3856 !important",
              color: "#FFFFFF",
              borderRadius: "10px",
              paddingY: 1,
              fontSize: "lg",
              width: "16rem",
            }}
            type="submit"
            onClick={onSignup}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            or use your{" "}
            <Typography
              component="span"
              sx={{ color: "#3b5998", fontWeight: "bold" }}
            >
              Social profile
            </Typography>
          </Typography>
          <Typography>
            Are you an {" "}
            <Link
              href={"/adminLogin"}
              style={{ color: "#3b5998", fontWeight: "bold" }}
            >
              Admin
            </Link>
            ?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              marginX: 2,
            }}
          >
            <Box>
              <Button
                 onClick={(e) => {
                  e.preventDefault()
                  handleGoogleSignIn()
                }}
                startIcon={<AiFillGoogleCircle />}
                sx={{
                  width: "9rem",
                  borderRadius: "10px !important",
                  backgroundColor: "#DB4437 !important",
                  color: "white",
                }}
              >
                Google
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => handleFacebookSignIn()}
                startIcon={<BsFacebook />}
                sx={{
                  width: "9rem",
                  borderRadius: "10px !important",
                  backgroundColor: "#3b5998 !important",
                  color: "white",
                }}
              >
                FaceBook
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
