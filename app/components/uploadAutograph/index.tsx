import AddIcon from "@mui/icons-material/Add";
import { setProgramingData, setAutographData } from "@/state/seprateSlice";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState, createContext, useContext } from "react";
import { addFormEntry } from "@/state/addSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import router from "next/router";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Key, Upload, UploadFile } from "@mui/icons-material";
import { Icon } from "@mui/material";
import { toast } from "react-hot-toast";

// import events from '@/modals/adminmodal';
const inputStyle = {
  outline: "none",
  border: "1px solid #E6E6E9",
  borderRadius: "6px",
  autoComplete: true,
  padding: 1,
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type FormValues = {
  ItemTitle: string;
  ItemSubject: string;
  ItemDescription: string;
  Hallno: string;
  eventType: string,
  Date: string;
  Time: string;
  Pic: string;
};

const EntryForm: React.FC<any> = (
  props: Partial<DropzoneProps>,
  { section }
) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState<FormValues>({
    ItemTitle: "",
    ItemSubject: "",
    ItemDescription: "",
    Hallno: "",
    eventType: "Autograph",
    Date: "",
    Time: "",
    Pic: "",
  });
  const [entries, setEntries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/admin/eventscreate", formValues);
      console.log("events created!!", response.data);
      router.push("/userdashboard");
      toast.success("Autograph Event Created Successfully!");
    } catch (error: any) {
      console.log("posting issue!!!", error.message);
      toast.success("Autograph Event Created Successfully!");
    }
    handleClose();
    
  };

  const formatEntry = ({ ItemTitle, ItemSubject }: FormValues) => {
    return `${ItemTitle} ${ItemSubject}`;
  };

  const resetForm = () => {
    setFormValues({
      ItemTitle: "",
      ItemSubject: "",
      ItemDescription: "",
      Hallno: "",
      eventType: "Autograph",
      Date: "",
      Time: "",
      Pic: "",
    });
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddIcon fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Box
              className="conatinercc"
              sx={{ display: "flex", marginTop: 2, gap: 2 }}
            >
              <Box className="left">
                <Typography>Item Title</Typography>

                <InputBase
                  required
                  name="ItemTitle"
                  value={formValues.ItemTitle}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Item Title"
                />
                <Typography>Item Description</Typography>
                <InputBase
                  name="ItemDescription"
                  value={formValues.ItemDescription}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Item Description"
                />
                <Typography>Date</Typography>
                <InputBase
                  required
                  name="Date"
                  value={formValues.Date}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="date"
                  placeholder="Enter Your Date"
                />
              </Box>

              <Box className="right">
                <Typography>Item Subject</Typography>
                <InputBase
                  required
                  name="ItemSubject"
                  value={formValues.ItemSubject}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Item Subject"
                />
                <Typography>Hall No.</Typography>
                <InputBase
                  required
                  name="Hallno"
                  value={formValues.Hallno}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="text"
                  placeholder="Enter Your Hall Number"
                />
                <Typography>Time</Typography>
                <InputBase
                  name="Time"
                  value={formValues.Time}
                  onChange={handleChange}
                  sx={inputStyle}
                  type="time"
                  placeholder="Enter Your Time"
                />
              </Box>
            </Box>
            <Box sx={{ marginTop: 1, border: "1px solid #E6E6E9", padding: 2 }}>
              <Typography sx={{ margin: 1 }}>Upload Image</Typography>
              {/* <Upload /> */}
              <Box>
                <Dropzone
                  onDrop={(files) => {
                    if (files.length > 0) {
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        Pic: files[0].name,
                      }));
                    }
                  }}
                  onReject={(files) => console.log("rejected files", files)}
                  maxSize={1 * 1024 ** 2}
                  accept={["image/jpeg", "image/png", "image/gif"]}
                  {...props}
                >
                  <Group
                    position="center"
                    spacing="xl"
                    style={{ minHeight: rem(100), pointerEvents: "none" }}
                  >
                    <Dropzone.Accept>
                      <Upload />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <Icon />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <UploadFile />
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
            <Button type="submit" onClick={handleSubmit} >
              Add formValues
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EntryForm;
