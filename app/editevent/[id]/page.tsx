"use client";
import { Box, Button, InputBase, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/navigation";
import { Group, Text, rem } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { Upload, UploadFile } from "@mui/icons-material";
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
  eventType: string;
  Date: string;
  Time: string;
  Pic: string;
};

const EntryForm = ({ params }: any, props: Partial<DropzoneProps>) => {
  const [eventstor, setEventstor] = useState<FormValues[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getEventById(id);
  }, []);

  const [formValues, setFormValues] = useState<FormValues>({
    ItemTitle: "",
    ItemSubject: "",
    ItemDescription: "",
    Hallno: "",
    eventType: "Programming",
    Date: "",
    Time: "",
    Pic: "",
  });
  console.log(formValues);
  const { id } = params;
  console.log(id);

  const router = useRouter();

  /**
   * Retrieves event data from the server based on the provided ID.
   * @param id - The ID of the event to retrieve.
   */
  const getEventById = async (id: any) => {
    try {
      const res = await axios.get(`/api/fetchProgram/${id}`);
      console.log(res)
      setEventstor([res.data.allPrograms]);
      console.log(eventstor);
    } catch (error) {
      // Handle error
    }
  };
  const handleCancle = {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Field name: ${name}, New value: ${value}`);
  
    // Create a copy of the eventstor array and update the specific element
    setEventstor((prevEventstor) =>
      prevEventstor.map((event, index) =>
        index === index/* specify the index of the element you want to update */
          ? { ...event, [name]: value }
          : event
      )
    );
  };
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      const apiUrl = `/api/fetchProgram/${id}`;
      const headers = {
        'Content-Type': 'application/json', // Set the Content-Type header
      };
  
      // Convert eventstor to a JSON string
      const requestData = JSON.stringify(eventstor);
  // console.log(eventstor)
      const response = await axios.put(apiUrl, requestData, { headers });
  
      console.log("Response:", response.data);
      console.log("Event updated!!");
      handleClose()
      router.push("/adminpanel");
      toast.success("Programming Event updated!");
    } catch (error) {
      console.error("Error updating event:", error);
    }
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
      eventType: "Programming",
      Date: "",
      Time: "",
      Pic: "",
    });
  };

  return (
    <div>
      {eventstor.map((event, index) => (
        <Box key={index}>
          <Modal
            open={true}
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
                      value={event.ItemTitle}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Item Title"
                    />
                    <Typography>Item Description</Typography>
                    <InputBase
                      name="ItemDescription"
                      value={event.ItemDescription}
                      onChange={handleChange }
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Item Description"
                    />
                    <Typography>Date</Typography>
                    <InputBase
                      required
                      name="Date"
                      value={event.Date}
                      onChange={handleChange }
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
                      value={event.ItemSubject}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Item Subject"
                    />
                    <Typography>Hall No.</Typography>
                    <InputBase
                      required
                      name="Hallno"
                      value={event.Hallno}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Your Hall Number"
                    />
                    <Typography>Time</Typography>
                    <InputBase
                      name="Time"
                      value={event.Time}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="time"
                      placeholder="Enter Your Time"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{ marginTop: 1, border: "1px solid #E6E6E9", padding: 2 }}
                >
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
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Button
                    style={{
                      background: "#008000",
                      marginTop: 1,
                      color: "#FFFFFF",
                    }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update
                  </Button>
                  <Button
                    style={{
                      background: "#008080",
                      marginTop: 1,
                      color: "#FFFFFF",
                    }}
                    type="reset"
                  >
                    reset
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
        </Box>
      ))}
    </div>
  );
};

export default EntryForm;
