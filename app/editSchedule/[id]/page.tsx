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
  _id: string;
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
  const { id } = params;
  const [eventstor, setEventstor] = useState<FormValues[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getEventById(id);
  }, []);

  const [formValues, setFormValues] = useState<FormValues>({
    _id: id ,
    ItemTitle: "",
    ItemSubject: "",
    ItemDescription: "",
    Hallno: "",
    eventType: "Autograph",
    Date: "",
    Time: "",
    Pic: "",
  });
  console.log(formValues);
  
  console.log(id);

  const router = useRouter();

  /**
   * Retrieves event data from the server based on the provided ID.
   * @param id - The ID of the event to retrieve.
   */
  const getEventById = async (id: any) => {
    try {
      const res = await axios.get(`/api/fetchAutograph/${id}`);
      console.log(res)
      setEventstor([res.data.allAutographs]);
      console.log(eventstor);
    } catch (error) {
      // Handle error
    }
  };
  const handleCancle = {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Field name: ${name}, New value: ${value}`);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Create a copy of the eventstore array and update the specific element
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
      router.push("/adminpanel");
      await axios.post("/api/updateProgramEvent",formValues);
      toast.success("Autograph Event updated!");
    } catch (error) {
      toast.success("Autograph Event updated!");
    }
  };
  

  const formatEntry = ({ ItemTitle, ItemSubject }: FormValues) => {
    return `${ItemTitle} ${ItemSubject}`;
  };

  const resetForm = () => {
    setFormValues({
      _id: "",
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
                    onClick={()=>{
                      handleSubmit;
                      setFormValues((prevValues) => ({
                        ...prevValues,
                        ItemSubject: event.ItemSubject,
                        ItemDescription: event.ItemDescription,
                        Hallno: event.Hallno,
                        Date: event.Date,
                        Time: event.Time,
                        ItemTitle: event.ItemTitle,
                        Pic: event.Pic

                      }));
                    }}
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
