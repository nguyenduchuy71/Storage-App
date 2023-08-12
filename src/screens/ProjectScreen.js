import React from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
import ProjectCard from '../components/ProjectCard'
import Loading from '../components/Loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../config/firebaseConfig.js'
import { Grid, Button, Box, Typography, Modal, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { addProjectAsync } from '../features/projectSlice'
import { useEffect } from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationManager, NotificationContainer } from 'react-notifications'
import emptyProject from '../assets/empty.png'

const style = {
  position: 'absolute',
  borderRadius: '5px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: '#ffffff',
  border: '3px solid #3399ff',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
}

function ProjectScreen () {
  const [channels, loading, error] = useCollection(db.collection('project'))
  const [user] = useAuthState(auth)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [projectName, setProjectName] = React.useState('')
  const [projectPassword, setProjectPassword] = React.useState('')
  const { isLoading, success } = useSelector(state => state.project)
  const dispatch = useDispatch()
  const addProject = async () => {
    if (projectName && projectPassword) {
      await dispatch(
        await addProjectAsync({
          projectName: projectName,
          projectPassword: projectPassword,
          user: user
        })
      )
      if(!isLoading){
        success
        ? NotificationManager.success('Add project successful.', 'Success')
        : NotificationManager.error('Add project fail.', 'Error')
      }
    }
  }
  useEffect(() => {
    if (!isLoading) setOpen(false)
    if (error) {
      NotificationManager.error('Something wrong occured.', 'Error')
    }
  }, [isLoading, success, loading])

  if (loading) {
    return <Loading />
  } else {
    return (
      <MainContainer>
        <NotificationContainer />
        <ButtonContainer>
          <Button
            onClick={handleOpen}
            sx={{ fontSize: 12, backgroundColor: '#09d90d' }}
            variant='contained'
            color='success'
          >
            Create project
          </Button>
        </ButtonContainer>
        <ListCardContainer>
          <Box sx={{ flexGrow: 1, marginLeft: 6, marginRight: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {channels?.docs?.length > 0?
              channels?.docs.map(doc => (
                <Grid key={doc.id} item xs={10} sm={4} md={3}>
                  <ProjectCard doc={doc} />
                </Grid>
              )): <EmptyProjectContainer>
                  <img style={{ width: '50%', height: 'auto', borderRadius: '10px' }} src= {emptyProject} alt='empty project image' />
                </EmptyProjectContainer>}
            </Grid>
          </Box>
        </ListCardContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography sx={{ fontSize: 16 }} id='modal-modal-title'>
              Create your project
            </Typography>
            <TextField
              required
              sx={{ mt: 2, mb: 2, fontSize: 20 }}
              id='project_name'
              fullWidth
              label='Name'
              variant='outlined'
              name='project_name'
              onChange={e => setProjectName(e.target.value)}
            />
            <TextField
              required
              sx={{ mt: 2, mb: 2 }}
              id='project_password'
              fullWidth
              label='Password'
              variant='outlined'
              type='password'
              name='project_password'
              onChange={e => setProjectPassword(e.target.value)}
            />
            <Button
              sx={{ fontSize: 12 }}
              onClick={addProject}
              variant='contained'
            >
              Save
            </Button>
          </Box>
        </Modal>
      </MainContainer>
    )
  }
}

export default ProjectScreen
const MainContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  position: relative;
`
const ButtonContainer = styled.div`
  position: absolute;
  top: -80px;
  right: 10px;
`

const ListCardContainer = styled.div`
  z-index: -1;
`

const EmptyProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`