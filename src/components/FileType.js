import React from 'react'
import styled from 'styled-components'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import ImageIcon from '@mui/icons-material/Image'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function FileType () {
  return (
    <>
      <p className='title-text'>File type</p>

      <FileTypeContainer>
        <FileTypeComponent style={{ borderBottom: '2px solid #ccc' }}>
          <FileTypeItem>
            <DocumentScannerIcon color='success' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Document</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>2GB</Typography>
          </FileTypeItem>
          <FileTypeItem>
            <OndemandVideoIcon color='primary' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Video</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>2GB</Typography>
          </FileTypeItem>
        </FileTypeComponent>
        <FileTypeComponent>
          <FileTypeItem>
            <VolumeUpIcon color='secondary' sx={{ fontSize: 40 }} />
            <Typography sx={{ fontSize: 14 }}>Audio</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>2GB</Typography>
          </FileTypeItem>
          <FileTypeItem>
            <ImageIcon color='action' sx={{ fontSize: 40, color: pink[500] }} />
            <Typography sx={{ fontSize: 14 }}>Image</Typography>
            <Typography sx={{ fontSize: 12, color: '#787a7a' }}>2GB</Typography>
          </FileTypeItem>
        </FileTypeComponent>
        <FileTypeLine />
      </FileTypeContainer>
    </>
  )
}

export default FileType

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
