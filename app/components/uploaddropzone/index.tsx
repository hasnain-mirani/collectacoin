import { Group, Text, useMantineTheme, rem } from '@mantine/core';


import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Upload, UploadFile } from '@mui/icons-material';
import { Icon } from '@mui/material';


export default function BaseDemo(props: Partial<DropzoneProps>): JSX.Element {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={1 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(100), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <Upload
            
          />
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
  );
}