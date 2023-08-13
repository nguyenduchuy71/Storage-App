import React from 'react'
import notFoundImage from '../assets/404-not-found-error.png'
import styled from 'styled-components'

function NotFoundScreen() {
  return (
    <NotFoundScreenContainer>
        <img style={{objectFit: 'cover', width: '50%'}} src={notFoundImage} alt='not found image' />
    </NotFoundScreenContainer>
  )
}

export default NotFoundScreen
const NotFoundScreenContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
