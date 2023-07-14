import { useState } from 'react';
import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Upload, UploadFile } from '@mui/icons-material';
import { Icon } from '@mui/material';

export default function BaseDemo(props: Partial<DropzoneProps>, onFileUpload: (fileURL: string) => void): JSX.Element {
  const theme = useMantineTheme();
  const [uploadedFileURL, setUploadedFileURL] = useState('');

  const handleDrop = (files:any) => {
    const uploadedFile = files[0];
    const fileURL = URL.createObjectURL(uploadedFile);
    setUploadedFileURL(fileURL);
    onFileUpload(fileURL); // Pass the URL to the parent component
  };

  return (
    <Dropzone
      onDrop={handleDrop}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={1 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(100), pointerEvents: 'none' }}>
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
  );
}
