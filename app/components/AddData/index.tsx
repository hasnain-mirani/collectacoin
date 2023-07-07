import { addFormEntry, updateFormEntry } from '@/state/addSlice';
import { Box, Button, IconButton, InputBase, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

const inputStyle = {
  outline: 'none',
  border: '1px solid #E6E6E9',
  borderRadius: '6px',
  autoComplete: true,
  padding: 1
};

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
  FirstName: string;
  LastName: string;
  Address: string;
  Hallno: string;
  Date: string;
  Time: string;
};

const EntryForm: React.FC = () => {
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formEntries = useSelector((state: RootState) => state.form);

  const [updatedEntry, setUpdatedEntry] = useState<FormValues>({
    FirstName: '',
    LastName: '',
    Address: '',
    Hallno: '',
    Date: '',
    Time: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (editingIndex !== -1) {
      dispatch(updateFormEntry({ index: editingIndex, updatedEntry }));
    } else {
      dispatch(addFormEntry(updatedEntry));
    }

    handleClose();
  };

  const formatEntry = ({ FirstName, LastName }: FormValues) => {
    return `${FirstName} ${LastName}`;
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <BiPlus fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Box className="conatinercc" sx={{ display: 'flex', marginTop: 2, gap: 2 }}>
              <Box className="left">
                <Typography>First Name</Typography>
                <InputBase
                  name="FirstName"
                  value={updatedEntry.FirstName}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Your First Name"
                />
                <Typography>Address</Typography>
                <InputBase
                  name="Address"
                  value={updatedEntry.Address}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Your Address"
                />
                <Typography>Date</Typography>
                <InputBase
                  name="Date"
                  value={updatedEntry.Date}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="date"
                  placeholder="Enter Your Date"
                />
              </Box>

              <Box className="right">
                <Typography>Last Name</Typography>
                <InputBase
                  name="LastName"
                  value={updatedEntry.LastName}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                <Typography>Hall No.</Typography>
                <InputBase
                  name="Hallno"
                  value={updatedEntry.Hallno}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Your Hall Number"
                />
                <Typography>Time</Typography>
                <InputBase
                  name="Time"
                  value={updatedEntry.Time}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="time"
                  placeholder="Enter Your Time"
                />
              </Box>
            </Box>
            <Button type="submit">Add Entry</Button>
          </form>

          
        </Box>
      </Modal>
    </div>
  );
};

export default EntryForm;
