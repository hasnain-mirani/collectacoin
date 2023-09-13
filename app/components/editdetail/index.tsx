import { useDispatch, useSelector } from 'react-redux';
// import { addFormEntry, deleteFormEntry, updateFormEntry } from '@/state/addSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputBase } from '@mui/material';
import Upload from '../uploaddropzone';
import { RootState } from '@/store';
import React, { useState } from 'react';
import { Edit } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  outline: 'none',
  border: '1px solid #E6E6E9',
  borderRadius: '6px',
  autoComplete: true,
  padding: 1,
};

type FormValues = {
  ItemTitle: string;
  ItemSubject: string;
  ItemDescription: string;
  Hallno: string;
  Date: string;
  Time: string;
};

export default function BasicModal() {
  // const dispatch = useDispatch();
  const formEntries = useSelector((state: RootState) => state.form);

  const [details, setDetails] = useState<FormValues>({
    ItemTitle: "",
    ItemSubject: '',
    ItemDescription: '',
    Hallno: '',
    Date: '',
    Time: '',
  });

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleDelete = (index: number) => {
    // dispatch(deleteFormEntry(index));
  };

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setDetails(formEntries[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // dispatch(updateFormEntry({ index: currentIndex, updatedEntry: details }));
    handleClose();
  };

  const resetForm = () => {
    setDetails({
      ItemTitle: "",
      ItemSubject: '',
      ItemDescription: '',
      Hallno: '',
      Date: '',
      Time: '',
    });
  };




  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <ul>
          {formEntries.map((entry, index) => (
            <li key={index}>
              {entry.Date}
              {entry.Time}
              
              <Button sx={{alignItems:'center'}} onClick={() => handleOpen(index)}><Edit style={{marginLeft:2}}/></Button>
           
              <Modal
                open={open && currentIndex === index}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box sx={{ padding: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Basic Details
                      </Typography>
                    </Box>
                    <Box className="conatinercc" sx={{ display: 'flex', marginTop: 2, gap: 2 }}>
                      <Box className="left">
                        <Typography>
                          Item Title
                        </Typography>
                        <InputBase
                          onChange={handleInputChange}
                          value={details.ItemTitle}
                         sx={inputStyle}
                          type="text"
                          name="ItemTitle"
                          placeholder="Enter Item Title"
                        />
                        <Typography>
                          Item Description
                        </Typography>
                        <InputBase
                          onChange={handleInputChange}
                          value={details.ItemDescription}
                          sx={inputStyle}
                          type="text"
                          name="ItemDescription"
                          placeholder="Enter Item Description"
                        />
                        <Typography>
                          Date
                        </Typography>
                        <InputBase
                       
                          onChange={handleInputChange}
                          value={details.Date}
                          sx={inputStyle}
                          type="date"
                          name="Date"
                          placeholder="Enter Your Date"
                        />
                      </Box>

                      <Box className="right">
                        <Typography>
                          Item Subject
                        </Typography>
                        <InputBase
                          onChange={handleInputChange}
                          value={details.ItemSubject}
                          sx={inputStyle}
                          type="text"
                          name="ItemSubject"
                          placeholder="Enter Item Subject"
                        />
                        <Typography>
                          Hall No.
                        </Typography>
                        <InputBase
                          onChange={handleInputChange}
                          value={details.Hallno}
                          sx={inputStyle}
                          type="text"
                          name="Hallno"
                          placeholder="Enter Your Hall Number"
                        />
                        <Typography>
                          Time
                        </Typography>
                        <InputBase
                         fullWidth
                          onChange={handleInputChange}
                          value={details.Time}
                          sx={inputStyle}
                          type="time"
                          name="Time"
                          placeholder="Enter Your Time"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: 1, border: '1px solid #E6E6E9', padding: 2 }}>
                    <Typography sx={{ margin: 1 }}>
                      Upload Image
                    </Typography>
                    <Upload />
                  </Box>
                  <Button onClick={handleUpdate}>Update</Button>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </Box>
              </Modal>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}
