"use client";
import { useState } from "react";
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

type FormValuesType = {
  email: string;
  password: string;
};

const Page = () => {
  const onlogin = () => {
    try {
      if(formValues.email === "admin123@gmail.com" && formValues.password === "Admin@12")
      {
        toast.success("Successfully Signed in");
        router.push("/adminpanel");
      }
      else
      {
        toast.error("Email or password is incorrect ");
      }
    } catch (error: any) {
      toast.error("Email or password is incorrect ", error.message);
    }
  };
  const [formValues, setFormValues] = useState<FormValuesType>({
    email: "",
    password: "",
  });
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  async function handleValuesChange(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues((pre) => ({ ...pre, [name]: value }));
  }
//   async function handleCredentialSignIn() {
//     await signIn("credentials", { ...formValues, redirect: false }).then(
//       ({ ok, error }: any) => {
//         if (error) {
//           setError(error);
//         } else {
//           router.push("/");
//         }
//       }
//     );
//   }

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
          alignItems: "",
          gap: 2,
          paddingTop: 12,
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
              placeholder="example@emai.com"
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            Are you a{" "}
            <Typography
              onClick={() => {
                router.push("/");
              }}
              component="span"
              sx={{ color: "#3b5998", fontWeight: "bold" }}
            >
              User ?{" "}
            </Typography>{" "}
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
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
