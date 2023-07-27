'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from "@mui/icons-material/Add";
import { InputBase } from '@mui/material';
import Upload from '../uploaddropzone'
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
  firstName: string;
  lastName: string;
};
const inputStyle={

    outline:'none',
    border:'1px solid #E6E6E9',
    borderRadius:'6px',
    autoComplete:true,
    padding:1
}

export default function BasicModal(): void {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState<any>({
    FirstName:'',
    LastName:'',
    Address:'',
    Hallno:'',
    Date:'',
    Time:''
  });
  const [entries, setEntries] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues:any) => ({
      ...prevValues,
      [name]: value,
    }))

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (isAnyFieldEmpty()) return;
  
      const newformValues = formatformValues(formValues);
      setEntries((prevEntries) => [...prevEntries, newformValues]);
      resetForm();
    };

    const isAnyFieldEmpty = () => {
      return (
        formValues.firstName.trim() === '' || formValues.lastName.trim() === ''
      );
    };
  
    const formatformValues = ({ firstName, lastName }: FormValues) => {
      return `${firstName} ${lastName}`;
    };
  
    const resetForm = () => {
      setFormValues({ firstName: '', lastName: '' });
    };
  
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Box sx={{padding:2}}>
            <Box sx={{display:'flex', justifyContent:'center'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Basic Details
          </Typography>
            </Box>
          <form onSubmit={handleSubmit}>
                <Box className='conatinercc' sx={{display:'flex', marginTop:2, gap:2}}>
          <Box className='left'>
          <Typography>
          First Name
          </Typography>
        <InputBase value={formValues.FirstName} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your First Name' /> 
         <Typography>
          Address
          </Typography>
        <InputBase value={formValues.Address} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your Address'  />
         <Typography>
         Date
          </Typography>
        <InputBase value={formValues.Date} onChange={handleChange} sx={inputStyle} type="date" placeholder='Enter Your Date'  />
          </Box>

          <Box className='right'>
          <Typography>
          Last Name
          </Typography>
        <InputBase value={formValues.LastName} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your First Name'  />
           <Typography>
           Hall No.
          </Typography>
        <InputBase value={formValues.Hallno} onChange={handleChange} sx={inputStyle} type="text" placeholder='Enter Your Hall Number'  />
          <Typography>
          Time
          </Typography>
        <InputBase value={formValues.Time} onChange={handleChange} sx={inputStyle} type="time   " placeholder='Enter Your Time'  />
          </Box>
              </Box>
              <Button type="submit">Add formValues</Button>
              </form>
              <ul>
        {entries.map((formValues, index) => (
          <li key={index}>{formValues}</li>
        ))}
      </ul>
            <Box sx={{marginTop:1, border:'1px solid #E6E6E9', padding:2}}>
                <Typography sx={{ margin:1}}>
                    Upload Image
                </Typography>
            <Upload/>
             </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
        }}