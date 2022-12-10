import React from 'react'
import styled from 'styled-components'
import { enterRoom } from '../features/appSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Modal,
  TextField
} from '@mui/material'

const style = {
  position: 'absolute',
  borderRadius: '5px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  border: '3px solid #3399ff',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
}

function ProjectCard (props) {
  const project = props.doc.data()
  const dispatch = useDispatch()
  const history = useHistory()
  const [projectPassword, setProjectPassword] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleJoinProject = () => {
    const project_id = project.project_id
    if (project.project_pass === projectPassword) {
      dispatch(
        enterRoom({
          roomId: project_id
        })
      )
      setOpen(false)
      history.push(`/project/${project_id}`)
    }
  }

  return (
    <MainContainer>
      <Card sx={{ fontSize: 12 }}>
        <CardMedia
          component='img'
          height='160'
          image='https://cdn01.alison-static.net/courses/1658/alison_courseware_intro_1658.jpg'
          alt='green iguana'
        />
        <CardActionArea>
          <CardContent>
            <Typography sx={{textAlign: 'center'}} gutterBottom variant='h4' component='div'>
              {project.project_name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{ fontSize: 12 }}
            variant='contained'
            onClick={handleOpen}
          >
            Join project
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 16 }} id='modal-modal-title'>
            Join project now
          </Typography>
          <TextField
            required
            sx={{ mt: 2, mb: 2 }}
            id='project_password'
            fullWidth
            label='Password'
            variant='outlined'
            name='project_password'
            onChange={e => setProjectPassword(e.target.value)}
          />
          <Button
            sx={{ fontSize: 12 }}
            onClick={handleJoinProject}
            variant='contained'
          >
            Go
          </Button>
        </Box>
      </Modal>
    </MainContainer>
  )
}

export default ProjectCard
const MainContainer = styled.div``
