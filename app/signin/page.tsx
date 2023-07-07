"use client"
import { useState } from 'react';
import Image from 'next/image'
import { RiFacebookFill } from "react-icons/ri";
import {RiTwitterFill} from "react-icons/ri";
import { signIn, useSession } from 'next-auth/react';
import {BiHide, BiShow} from "react-icons/bi";
import { useRouter } from 'next/navigation';
import { Box, Button, FormControl, InputBase, Typography } from "@mui/material";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

type FormValuesType = {
  email: string;
  password: string;
  agreed: boolean;
};

const Page = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({ email: '', password: '', agreed: true });
  const { data: session, status } = useSession()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('')
  const router = useRouter();
  async function handleValuesChange(e: React.ChangeEvent<HTMLInputElement>) {

    let name = e.target.name;
    let value = e.target.value;
    console.log(name);
    console.log(value)
    setFormValues(pre=> ({...pre, [name]: value}));
  }
  async function handleGoogleSignIn(){
     signIn("google", {redirect: true, callbackUrl: "/dashboard"});

  }
  async function handleFacebookSignIn(){
   signIn("facebook", {redirect:  true, callbackUrl: "/dashboard"});
    
  }
  console.log(handleFacebookSignIn)
  async function handleCredentialSignIn(){
   await signIn('credentials', {...formValues, redirect: false}).then(({ok, error}:any)=> {
    if(error){
      setError(error);
    }else{
      router.push( "/dashboard")
    }
})
  
  }
  
  return (
      // <div className="h-screen bg-white pt-4">
      //   <div className="p-8">
      //       <div>
      //               <Image
      //               unoptimized={true}
      //               src="/logo.png"
      //               alt="CollectaCon Logo"
      //               width={100}
      //               className='w-full'
      //               height={24}
      //               />
      //       </div>
      //       <div className='flex flex-row justify-center'>
      //           <p className='font-semibold text-gray-400'>EXPO COMPANION</p>
      //       </div>
      //     <div className='mt-14'>
      //          <p className="text-2xl font-semibold font-roboto">Sign In</p>
      //          <p className='font-md text-gray-400 mt-3'>Hi there! Nice to see you again.</p>
      //     </div>
      //     <div className='mt-4 flex flex-col gap-2'>
      //       <div className='w-full my-3 flex flex-col gap-2'>
      //         <p className="font-roboto text-red-500 font-medium">Email</p>
      //         <input onChange={handleValuesChange} name="email" value={formValues.email} className="border-b-2 border-gray-200 border-t-0 border-r-0 border-l-0 outline-none w-full" placeholder='Your email address' />
      //       </div>
      //       <div className='w-full my-3 flex flex-col gap-2 relative'>
      //         <p className="text-primary font-medium">Password</p>
      //         <input placeholder='Your Password' onChange={handleValuesChange} type={showPassword? "text": "password"} name="password" value={formValues.password} className="relative border-b-2 border-gray-200 border-t-0 border-r-0 border-l-0  outline-none w-full" />
      //          {showPassword? <BiHide onClick={()=> setShowPassword((pre)=> !pre)} size="1.8em" className='text-gray-400 absolute right-2 top-5'  />: <BiShow onClick={()=> setShowPassword((pre)=> !pre)} size="1.8em" className='text-gray-400 absolute right-2 top-5' />}  
      //       </div>
            
      //       <button className='text-white bg-primary rounded-md py-3 mt-6 shadow-md' onClick={()=> handleCredentialSignIn()}>Sign In</button>
      //       <div className='flex flex-row justify-center mt-4'>
      //         <p className='text-gray-400 font-medium'>
      //           or use one of your social profiles
      //         </p>
      //       </div>
      //       <div className='flex flex-row justify-evenly'>
      //           <div>
      //               <button onClick={()=> handleGoogleSignIn()} className='bg-twitter hover:bg-twitter-700 text-white py-3 px-2 rounded-md flex flex-row justify-around items-center w-36'> <RiTwitterFill size="1.5em"/>Twitter</button>
      //           </div>
      //           <div>         
      //              <button onClick={()=> handleFacebookSignIn()} className='bg-facebook hover:bg-facebook-700 text-white rounded-md py-3 px-2 flex flex-row justify-around w-36 items-center'><RiFacebookFill size="1.5em"/> Facebook</button>
      //           </div>
      //       </div>
      //       <div className='flex flex-row justify-between mt-6'>
      //          <div>
      //             <button className='text-gray-400 font-medium'>Forgot Password?</button>
      //           </div>
      //           <div >
      //              <button className='text-primary'>Sign Up</button>
      //           </div>
      //       </div>
      //       {session?.user?.email}
      //     </div>
      //   </div>
      // </div>
      // <Box sx={{padding: 2}}>

      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        backgroundColor: "#fff",
        height: "100dvh",
        width: "100dwh",
        padding: 2
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
          <Box  sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            paddingX: 1
          }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Sign In
            </Typography>
          </Box>
          <Box  sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            paddingX: 1
          }}>
             <Typography sx={{fontSize: 15, marginLeft: 0.5}}>Hi there! Nice to see you again.</Typography>
          </Box>

        </Box>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingX: 1}}>
            <Box>
              <Typography sx={{ color: "#523FAD", p: 0.5 }}>Email</Typography>
              <InputBase
              onChange={handleValuesChange} name="email" value={formValues.email}
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
              onChange={handleValuesChange} type={showPassword? "text": "password"} name="password" value={formValues.password}
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
        
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 2}}>
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
            onClick={()=> handleCredentialSignIn()}
          >
            Sign In
          </Button>
        </Box>
        <Box   sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <Typography >or use your <Typography component="span" sx={{color:'#3b5998', fontWeight: "bold"}}>Social profile </Typography> </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column", justifyContent:'center' }}>
          <Box sx={{display:'flex', gap:2, justifyContent:'space-between', marginX: 2}}>
          <Box>
            <Button onClick={()=> handleGoogleSignIn()} startIcon={ <AiFillGoogleCircle/> }   sx={{width:'9rem', borderRadius:'10px !important', backgroundColor:'#DB4437 !important',color:'white'}}>
              Google
            </Button>
          </Box>
          <Box>
            <Button onClick={()=> handleFacebookSignIn()} startIcon={ <BsFacebook/>} sx={{width:'9rem', borderRadius:'10px !important', backgroundColor:'#3b5998 !important', color:'white' }}>
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
