import AddIcon from '@mui/icons-material/Add';
import { setProgramingData, setAutographData } from '@/state/seprateSlice';
import { Box, Button, IconButton, InputBase, Modal, Typography } from '@mui/material';
import React, { useState,createContext, useContext, } from 'react';
import Upload from '../uploaddropzone'
 import { addFormEntry } from '@/state/addSlice';
import { useDispatch } from 'react-redux';
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
    Time:''
};


const EntryForm:React.FC<any> = ({section}) => {
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
    Time:''
  });
  const [entries, setEntries] = useState<string[]>([]);
 
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  

  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault();
    if (section === 'programing') {
      dispatch(setProgramingData(formValues));
    } else if (section === 'autograph') {
      dispatch(setAutographData(formValues));
    }
    dispatch(addFormEntry(formValues));
    
    const newEntry:any = formatEntry(formValues);
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    resetForm();
  };

 
 

  const formatEntry = ({ FirstName, LastName }: FormValues) => {
    return `${FirstName} ${LastName}`;
  };

  const resetForm = () => {
    setFormValues({  FirstName:'',
    LastName:'',
    Address:'',
    Hallno:'',
    Date:'',
    Time:''});
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
            <Upload/>
             </Box>
              <Button type="submit">Add formValues</Button>
              </form>
      
     </Box>
      </Modal>
    </div>
    
  );
};

export default EntryForm;
