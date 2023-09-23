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
    Title: string,
    EventName: string
    Venue: string
    File: string
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
    Title: "",
    EventName: "",
    Venue: "",
    File: "",
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
      const res = await axios.get(`/api/fetchPlan/${id}`);
      setEventstor([res.data.allPlans]);
    } catch (error: any) {
        console.log("No data found!");
    }
  };
  const handleCancle = {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      await axios.post("/api/updatePlan",formValues);
      toast.success("Plan Updated Successfully!");
    } catch (error) {
      toast.success("Plan Updated Successfully!");
    }
  };
  

  const formatEntry = ({ Title, EventName }: FormValues) => {
    return `${Title} ${EventName}`;
  };

  const resetForm = () => {
    setFormValues({
      _id: "",
      Title: "",
      EventName: "",
      Venue: "",
      File: "",
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
                    <Typography>Title</Typography>

                    <InputBase
                      required
                      name="Title"
                      value={event.Title}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Title"
                    />
                    <Typography>Venue</Typography>
                    <InputBase
                      name="Venue"
                      value={event.Venue}
                      onChange={handleChange }
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Venue"
                    />
                  </Box>

                  <Box className="right">
                    <Typography>Event Name</Typography>
                    <InputBase
                      required
                      name="EventName"
                      value={event.EventName}
                      onChange={handleChange}
                      sx={inputStyle}
                      type="text"
                      placeholder="Enter Event Name"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{ marginTop: 1, border: "1px solid #E6E6E9", padding: 2 }}
                >
                  <Typography sx={{ margin: 1 }}>Upload PDF File</Typography>
                  {/* <Upload /> */}
                  <Box>
                    <Dropzone
                      onDrop={(files) => {
                        if (files.length > 0) {
                          setFormValues((prevValues) => ({
                            ...prevValues,
                            File: files[0].name,
                          }));
                        }
                      }}
                      onReject={(files) => console.log("rejected files", files)}
                      maxSize={1 * 1024 ** 2}
                      accept={["application/pdf"]}
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
                            Drag PDF File here or click to select file
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
                        Title: event.Title,
                        EventName: event.EventName,
                        Venue: event.Venue,
                        File: event.File

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
