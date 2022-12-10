import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db, storage } from '../config/firebaseConfig'
import { useParams } from 'react-router-dom'
import DropFileInput from '../components/DropFileInput'
import Loading from '../components/Loading'
import Chart from '../components/Chart'
import Progress from '../components/Progress'
import FileType from '../components/FileType'
import { ImageConfig } from '../config/ImageConfig'
import { formatFileSize } from '../config/util'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import '../css/drop-file-input.css'
import { useSelector, useDispatch } from 'react-redux'


function ProjectDetail () {
  const [channels, loading, error] = useCollection(db.collection('project'))
  const params = useParams()
  const [project, setProject] = useState(null)
  const [usedQuota, setUsedQuota] = useState(0)
  const [images, setImages] = useState([])
  const [status, setStatus] = useState(false)
  const [progress, setProgress] = useState(0)
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.file)
  const project_id = params.id

  useEffect(() => {
    channels?.docs.map(doc => {
      if (doc.data().project_id === project_id) {
        return setProject(doc.data())
      }
    })
    const project_images = storage.ref().child(project_id)
    project_images
      .list()
      .then(result => {
        let list_storage_image = []
        let total_used_quota = 0
        result.items.forEach(imageRef => {
          imageRef.getMetadata().then(metadata => {
            total_used_quota = total_used_quota + metadata.size
            list_storage_image = [...list_storage_image, metadata]
            setImages(list_storage_image)
            setUsedQuota(total_used_quota)
          })
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [loading])

  const handleFileChange = files => {
    if (files && files.length > 0) {
      setStatus(true)
      const promises = []
      files.map(image => {
        const uploadTask = storage.ref(`${project_id}/${image.name}`).put(image)
        promises.push(uploadTask)
        uploadTask.on(
          'state_changed',
          snapshot => {
            const process = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(process)
          },
          error => {
            console.log(error)
          }
        )
      })
      Promise.all(promises)
        .then(data => {
          let updatedList = [...images]
          data.forEach(imageRef => {
            const file_metadata = imageRef._delegate.metadata
            if (file_metadata) {
              updatedList = [...updatedList, file_metadata]
              setImages(updatedList)
              setUsedQuota(usedQuota + file_metadata.size)
            }
          })
        })
        .catch(err => console.log(err))
        .finally(() => {
          setStatus(false)
          setProgress(0)
        })
    }
  }
  const fileRemove = file => {
    const desertRef = storage.ref().child(file?.fullPath)
    const updatedList = [...images]
    updatedList.splice(images.indexOf(file), 1)
    desertRef
      .delete()
      .then(() => {
        setImages(updatedList)
        setUsedQuota(usedQuota - file.size)
      })
      .catch(error => {
        console.log(error)
      })
  }
  if (loading) {
    return <Loading />
  } else {
    return (
      <MainContainer>
        <LeftContainer>
          <p className='title-text'>Upload files</p>
          {status ? (
            <Progress progress={progress} />
          ) : (
            <DropFileInput onFileChange={files => handleFileChange(files)} />
          )}
          <ListImageContainer>
            <p className='title-text'>Your files</p>
            <TableContainer
              sx={{ overflowY: 'auto', maxHeight: 400 }}
              component={Paper}
            >
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: 14 }}>Name</TableCell>
                    <TableCell sx={{ fontSize: 14 }} align='right'>
                      Size
                    </TableCell>
                    <TableCell sx={{ fontSize: 14 }} align='right'>
                      Updated
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                {images.length > 0 ? (
                  <TableBody>
                    {images.map(row => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          <div className='drop-file-preview__item'>
                            <img
                              src={
                                ImageConfig[row.name.split('.')[1]] ||
                                ImageConfig['default']
                              }
                              alt=''
                            />
                            <span className='drop-file-preview__item__info'>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell sx={{ fontSize: 12 }} align='right'>
                          {formatFileSize(row.size)}
                        </TableCell>
                        <TableCell sx={{ fontSize: 12 }} align='right'>
                          {row.updated.split('T')[0]}
                        </TableCell>
                        <TableCell align='right'>
                          <DeleteForeverIcon
                            className='icon-delete'
                            onClick={() => fileRemove(row)}
                            sx={{ fontSize: 24, cursor: 'pointer' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : null}
              </Table>
            </TableContainer>
          </ListImageContainer>
        </LeftContainer>
        <RightContainer>
          <FileType />
          <p className='title-text'>Used quota</p>
          <ChartContainer>
            <Chart usedQuota={usedQuota} />
          </ChartContainer>
        </RightContainer>
      </MainContainer>
    )
  }
}

export default ProjectDetail

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px;
  height: max-content !important;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  flex: 0.7;
  padding: 10px;
  background-color: #f0f5f5;
  @media (max-width: 1023px) {
    flex: 1;
  }
`

const RightContainer = styled.div`
  flex: 0.3;
  padding: 10px;
  @media (max-width: 1023px) {
    flex: 1;
  }
`

const ListImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ChartContainer = styled.div`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
`
