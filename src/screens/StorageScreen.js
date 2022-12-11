import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { auth } from '../config/firebaseConfig.js'
import { useSelector, useDispatch } from 'react-redux'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import logofirebase from '../assets/firebase.png'
import logoamazons3 from '../assets/amazons3.png'
import SendIcon from '@mui/icons-material/Send'
import { addStorageAsync } from '../features/storageSlice'
import 'react-notifications/lib/notifications.css'
import { NotificationManager, NotificationContainer } from 'react-notifications'

function StorageScreen () {
  const [apiKey, setApiKey] = useState('')
  const [appId, setAppId] = useState('')
  const [authDomain, setAuthDomain] = useState('')
  const [projectId, setProjectId] = useState('')
  const [messagaingSenderId, setMessagaingSenderId] = useState('')
  const [storageBucket, setStorageBucket] = useState('')
  const [measurementId, setMeasurementId] = useState('')
  const [desc, setDesc] = useState('')
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const { isLoading, success } = useSelector(state => state.storage)

  const handleChangeStorage = () => {
    dispatch(
      addStorageAsync({
        storage_type: 'firebase',
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagaingSenderId,
        appId: appId,
        measurementId: measurementId,
        user: user
      })
    )
    success
      ? NotificationManager.success('Config storage successful.', 'Success')
      : NotificationManager.error('Error when config storage.', 'Error')
  }
  useEffect(() => {}, [success])
  return (
    <ContainerScreen>
      <NotificationContainer />
      <TabContainer>
        <Tabs
          defaultActiveKey='firebase'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='firebase' title='Firebase'>
            <StorageContainer>
              <ImageContainer alt='firebase-logo' src={logofirebase} />
              <Box
                component='form'
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete='off'
              >
                <div>
                  <TextField
                    id='apikey'
                    label='Api Key'
                    sx={{ fontSize: 20 }}
                    required
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                  />
                  <TextField
                    id='authDomain'
                    label='Auth Domain'
                    sx={{ fontSize: 20 }}
                    required
                    value={authDomain}
                    onChange={e => setAuthDomain(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id='projectid'
                    label='Project ID'
                    sx={{ fontSize: 20 }}
                    required
                    value={projectId}
                    onChange={e => setProjectId(e.target.value)}
                  />
                  <TextField
                    id='messagingSenderId'
                    label='Messaging Sender Id'
                    sx={{ fontSize: 20 }}
                    required
                    value={messagaingSenderId}
                    onChange={e => setMessagaingSenderId(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id='appId'
                    label='App Id'
                    sx={{ fontSize: 20 }}
                    required
                    value={appId}
                    onChange={e => setAppId(e.target.value)}
                  />
                  <TextField
                    required
                    id='measurementId'
                    label='Measurement Id'
                    sx={{ fontSize: 20 }}
                    value={measurementId}
                    onChange={e => setMeasurementId(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    required
                    id='storageBucket'
                    label='Storage Bucket'
                    sx={{ fontSize: 20 }}
                    value={storageBucket}
                    onChange={e => setStorageBucket(e.target.value)}
                  />
                  <TextField
                    id='desc'
                    label='Description'
                    sx={{ fontSize: 20 }}
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                  />
                </div>
              </Box>
              <Button
                onClick={handleChangeStorage}
                variant='contained'
                size='large'
                endIcon={<SendIcon />}
              >
                Save
              </Button>
            </StorageContainer>
          </Tab>
          <Tab eventKey='s3' title='Amazon S3'>
            <StorageContainer>
              <ImageContainer alt='firebase-logo' src={logoamazons3} />
            </StorageContainer>
          </Tab>
        </Tabs>
      </TabContainer>
    </ContainerScreen>
  )
}

const ContainerScreen = styled.div`
  width: 100%;
  padding: 20px 0;
`
const TabContainer = styled.div`
  padding: 20px;
  font-size: 16px;
`
const ImageContainer = styled.img`
  width: 260px;
  height: auto;
  border-radius: 6px;
  object-fit: contain;
  margin-bottom: 10px;
`

const StorageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`

export default StorageScreen
