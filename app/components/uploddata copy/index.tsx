import AddIcon from '@mui/icons-material/Add';
import { setProgramingData, setAutographData } from '@/state/seprateSlice';
import { Box, Button, IconButton, InputBase, Modal, Typography } from '@mui/material';
import React, { useState,createContext, useContext, } from 'react';
// import Upload from '../uploaddropzone'
 import { addFormEntry } from '@/state/addSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import router from 'next/router';
import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Upload, UploadFile } from '@mui/icons-material';
import { Icon } from '@mui/material';

// import events from '@/modals/adminmodal';
const inputStyle={

    outline:'none',
    border:'1px solid #E6E6E9',
    borderRadius:'6px',
    autoComplete:true,
    padding:1
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
 
type FormValues = {
    FirstName:'',
    LastName:'',
    Address:'',
    Hallno:'',
    Date:'',
    Time:'',
    Pic:'',
};


const EntryForm:React.FC<any> = (props: Partial<DropzoneProps>,{section}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [formValues, setFormValues] = useState<FormValues>({
    FirstName:'',
    LastName:'',
    Address:'',
    Hallno:'',
    Date:'',
    Time:'',
    Pic:''
  });
  const [entries, setEntries] = useState<string[]>([]);
 
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  

  // const handleSubmit = (event: React.FormEvent) => {

  //   event.preventDefault();
  //   if (section === 'programing') {
  //     dispatch(setProgramingData(formValues));
  //   } else if (section === 'autograph') {
  //     dispatch(setAutographData(formValues));
  //   }
  //   dispatch(addFormEntry(formValues));
    
  //   const newEntry:any = formatEntry(formValues);
  //   setEntries((prevEntries) => [...prevEntries, newEntry]);
  //   resetForm();
  // };

 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      
        const response = await axios.post("/api/admin/eventscreate", formValues);
        console.log("events created!!", response.data);
        router.push("/userdashboard");
    } catch (error:any) {
        console.log("posting issue!!!", error.message);
    }
  }

  const formatEntry = ({ FirstName, LastName }: FormValues) => {
    return `${FirstName} ${LastName}`;
  };

  const resetForm = () => {
    setFormValues({  FirstName:'',
    LastName:'',
    Address:'',
    Hallno:'',
    Date:'',
    Time:'',
  Pic:''});
  };

  return (
 
    <div>
<IconButton onClick={handleOpen}><AddIcon fontSize="large" /></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     <Box sx={style}>
     <form onSubmit={handleSubmit}>
                <Box className='conatinercc' sx={{display:'flex', marginTop:2, gap:2}}>
          <Box className='left'>
          <Typography>
          First Name
          </Typography>
          

        <InputBase required name="FirstName"  value={formValues.FirstName} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your First Name' /> 
         <Typography>
          Address
          </Typography>
        <InputBase name="Address"  value={formValues.Address} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your Address'  />
         <Typography>
         Date
          </Typography>
        <InputBase required name="Date"  value={formValues.Date} onChange={handleChange} sx={inputStyle} type="date" placeholder='Enter Your Date'  />
          </Box>

          <Box className='right'>
          <Typography>
          Last Name
          </Typography>
        <InputBase required name="LastName"  value={formValues.LastName} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your First Name'  />
           <Typography>
           Hall No.
          </Typography>
        <InputBase required name="Hallno"  value={formValues.Hallno} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your Hall Number'  />
          <Typography>
          Time
          </Typography>
        <InputBase  name="Time"  value={formValues.Time} onChange={handleChange} sx={inputStyle} type="time" placeholder='Enter Your Time'  />
          </Box>
              </Box>
              <Box sx={{marginTop:1, border:'1px solid #E6E6E9', padding:2}}>
                <Typography sx={{ margin:1}}>
                    Upload Image
                </Typography>
            {/* <Upload /> */}
            <Box>
            <Dropzone
      onDrop={(files) => console.log('accepted files', formValues.Pic)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={1 * 1024 ** 2}
      // accept='image/*'
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(100), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <Upload />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <Icon
            // size="3.2rem"
            // stroke={1.5}
            // // color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <UploadFile  />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
         
        </div>
      </Group>
    </Dropzone>
            </Box>
             </Box>
              <Button type="submit" onClick={handleSubmit}>Add formValues</Button>
              </form>
      
     </Box>
      </Modal>
    </div>
    
  );
};

export default EntryForm;
