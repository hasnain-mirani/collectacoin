import React from 'react'
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material'
import {Box} from "@mui/material";
// import FlexBetween from 'styleComponents/FlexBetween'
// import { useDispatch } from 'react-redux'
// import { setMode } from 'state/modeSlice'
// import AccountMenu from './accountmenu';
import { useSelector } from 'react-redux';
// import { logout } from 'state/userSlice'
import { useTheme, AppBar, Toolbar, IconButton, InputBase } from '@mui/material'
const Navbar = ({isSidebarOpen, setSidebarOpen}:any) => {
    
    // const {user} = useSelector((state:any)=> state.userState);
    // const dispatch = useDispatch();
    const theme = useTheme();

  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
            {/* left side */}
            <Box>
                <IconButton onClick={()=>  setSidebarOpen((prev:any)=> !prev)} >
                    <MenuIcon />
                </IconButton >
                <Box 
                // backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search...' />
                    <IconButton>
                        <Search/>
                    </IconButton>

                </Box>
            </Box>
            {/* right side */}
            <Box gap="1.5rem">
                <IconButton 
                // onClick={()=> dispatch(setMode())}
                 >
                    {theme.palette.mode === 'dark'? <DarkModeOutlined sx={{fontSize: '25px'}} />: <LightModeOutlined sx={{fontSize: '25px'}} />}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize: '25px'}} />
                </IconButton>
                {/* <IconButton> */}
                    {/* <AccountMenu /> */}
                {/* </IconButton> */}

            </Box>

        </Toolbar>

    </AppBar>
  )
}

export default Navbar