"use client";
import Cookies from 'js-cookie';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase, Button, Typography, IconButton } from "@mui/material";
import { BsFilter, BsBookmark } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// import { fetchOrders } from '@/worker/woocommerce';
import { useState, useEffect, useContext } from "react";
import { ContextValues } from "@/app/Context/context";
import Side from "../components/side";
import { CalendarMonth } from "@mui/icons-material";
import jwtDecode from "jwt-decode";
import axios from 'axios';
const api = new WooCommerceRestApi({
  url: "https://tickets.collectacon.nl/stg_43cc2",
  consumerKey: "ck_49fe13f9ae81669bca995c6a28883b940f471322",
  consumerSecret: "cs_c6fb3d55f2b37512df94022b1344c4dd71219c22",
  version: "wc/v3",
});
interface Order {
  billing: {
    email: string;
    // Other properties related to billing
  };
  // Other properties of the order
}
interface DecodedToken {
  email: string;
  // Other properties of the token
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { searchVal, setSearchVal } = useContext(ContextValues);
  const pathname = usePathname();
  const router = useRouter();
  const [orders, setOrders] = useState<any>([]);
  const [data, setData] = useState({
    _id:'',
    firstName:'',
    lastName:'',
    email:''
  })
  const [userEmail, setUserEmail] = useState<string>("");
  const [products, setProducts] = useState<any>([]);
  const getDetail= async()=>{
    const res= await axios.get('api/user/userdata')
    console.log(res.data)
    setData(res.data.data)
   }
   useEffect(() => {
     
     getDetail()   
     .then(() => {
      // Once the user data is fetched, store the email in state
      setUserEmail(data.email);
      console.log(data.email)
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
   }, [])
   useEffect(() => {
     api
      .get("orders", {
        // Add a filter to get only the orders with a specific email
        search: userEmail,
        // You can adjust the filter based on the API response structure.
        // If 'email' is nested, provide the correct path, e.g., 'billing.email'
      })
      .then((response) => {
        // Filter the orders based on the user's email
        const filteredOrders = response.data.filter(
          (order: Order) => order.billing.email === userEmail
        );

        setOrders(filteredOrders);
        console.log(filteredOrders)
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
   }, []);
 
  const [activePage, setActivePage] = useState<string>("home");
 
  useEffect(() => {
    let paths = pathname.split("/");

    setActivePage(paths[2]);
  }, [pathname]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", backgroundColor: "#fff", p:1 }}>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginY: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
         
            alignItems: "center",
            width: "100vw",
            padding: 1,
          }}
        >
          <Side />
          <Typography
            sx={{
              color: "#523FAD",
              fontSize: "26px",
              fontWeight: 600,
              marginX: 10,
            }}
          >
            My Ticket
          </Typography>
         
        </Box>
        
      </Box>
      <Box sx={{ paddingX: 1 }}>
        <Typography sx={{ color: "#000", fontSize: " 30px", fontWeight: 600 }}>
          Hey, {data.firstName}
        </Typography>
        <Typography sx={{ color: "#595959", fontSize: "18px", width: "80vw" }}>
          Don’t forget to visit your nearest events that you have subscribe at
          this week.
        </Typography>
      </Box>
      <div>
             {/* Display the filtered orders */}
      {orders.map((order:any) => (
        <div key={order.id}>
          {/* ... Display order details ... */}
          <h1> {order.id}</h1>
          <h1> {order.billing.first_name}</h1>
          <h1> {order.status}</h1>
        </div>
      ))}
    </div>
      <Box sx={{ display: "flex", paddingX: 1, gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img src="allevent.png" alt="" />
          <Typography sx={{ color: "#523FAD" }}>All Events</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img src="autograph.png" alt="" />
          <Typography sx={{ color: "#523FAD" }}>Autograph</Typography>
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "120px",
            borderRadius: "30px",
            background: "#EEECF9",
          }}
        >
          <img src="camera.png" alt="" />
          <Typography sx={{ color: "#523FAD" }}>Photo OPS</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          paddingX: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: '100%',
            p: 1,
          }}
        >
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
            Today Ticket
          </Typography>
            
        </Box>
        <Box
          sx={{
            p:1,
            width: "370px",
            height: "200px",
            backgroundImage: "url('pexels.png')",
            borderRadius: "30px",
            margin:1,
            backdropFilter: 'blur(10px)'
        
          }}
        >
         <Box sx={{marginY:15,marginX:2,
          display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'flex-start'}}>
         <Box sx={{display:'flex'}}> 
            <CalendarMonth sx={{ color: "#fff"}}/>
            <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: 500 }}>March 09, 2023</Typography>
            </Box>
          <Box sx={{ color: "#fff", fontSize: "22px", fontWeight: 500 }}>Programming event</Box>
          </Box> 
        </Box>
      </Box>
      <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100",
            p: 1,
          }}
        >
          <Typography sx={{ color: "#000", fontSize: "25px", fontWeight: 600 }}>
          All Tickets
          </Typography>
       
        </Box>
        <Box >
        <Box sx={{minHeight: "6rem", backgroundColor: '#EEECF9', borderRadius: "20px", display: "flex", flexDirection: "row", margin:1}}>
                  <img src="https://picsum.photos/200" alt="image"              
                      width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '37%', height: '100%', borderRadius: "20px" }} />
                    <Box sx={{width: "63%", display:"flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <Box sx={{display: "flex", flexDirection: "column",marginLeft: 2,paddingY: 2,}}>
                            <Typography sx={{fontWeight: "bold"}}>Item Title</Typography>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 2}}>
                            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 0.5}}>
                                
                                <Typography sx={{color: '#595959', fontSize: 14}}>Date</Typography>
                                <Typography  sx={{color: '#523FAD', fontSize: 12}}>17:30 - 18:00</Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: 0.5}}>
                                <Typography  sx={{color: '#595959', fontSize: 14}}>Time</Typography>
                                <Typography  sx={{color: '#523FAD', fontSize: 12}}>17:30 - 18:00</Typography>
                            </Box>

                        </Box>
                      </Box>

                      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", marginX: 1, marginY: 1}}>
                        <IconButton><BsBookmark size="1rem" /></IconButton>
                      </Box>

                    </Box>
                 </Box>
         
        </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      ></Box>

      {children}
    </Box>
  );
}
