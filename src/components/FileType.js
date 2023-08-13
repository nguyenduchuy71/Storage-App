import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import ImageIcon from '@mui/icons-material/Image'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { formatFileSize } from '../config/util'

function FileType ({list_storage_image}) {
  const [fileType, setFileType] = useState({
    text: 0,
    image: 0,
    video: 0,
    other: 0,
  });
  const handleDisplayFileType = () => {
    const objectFileType = {
      text: 0,
      image: 0,
      video: 0,
      other: 0,
    }
    list_storage_image = list_storage_image.map((image) => {
      if(image?.name.toLowerCase().match("^.*\.(jpg|png|jpeg|gif)$")){
        objectFileType.image += image?.size
      }
      else if(image?.name.toLowerCase().match("^.*\.(txt|doc|pdf|ppt|csv|xlsx|pptx)$")){
        objectFileType.text += image?.size
      }
      else if(image?.name.toLowerCase().match("^.*\.(wav|mp3|mp4|avi|wmv)$")){
        objectFileType.video += image?.size
      }
      else{
        objectFileType.other += image?.size
      }
      return list_storage_image
    });
    setFileType(objectFileType)
  }
  useEffect(() => {
    handleDisplayFileType()
  }, [list_storage_image])
  return (
    <div>
      <p className='title-text'>File types</p>
      <FileTypeContainer>
        <FileTypeComponent style={{ borderBottom: '2px solid #ccc' }}>
          <FileTypeItem>
            <AssignmentIcon color='secondary' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Text</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>{formatFileSize(fileType.text)}</Typography>
          </FileTypeItem>
          <FileTypeItem>
            <OndemandVideoIcon color='primary' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Video</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>{formatFileSize(fileType.video)}</Typography>
          </FileTypeItem>
        </FileTypeComponent>
        <FileTypeComponent>
          <FileTypeItem>
            <ImageIcon color='action' sx={{ fontSize: 40, color: pink[500] }} />
            <Typography sx={{ fontSize: 14 }}>Image</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>{formatFileSize(fileType.image)}</Typography>
          </FileTypeItem>
          <FileTypeItem>
            <DocumentScannerIcon color='success' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Other</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>{formatFileSize(fileType.other)}</Typography>
          </FileTypeItem>
        </FileTypeComponent>
        <FileTypeLine />
      </FileTypeContainer>
    </div>
  )
}

export default React.memo(FileType)

const FileTypeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const FileTypeLine = styled.div`
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  width: 2px;
  height: 100%;
`

const FileTypeComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
`

const FileTypeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`
