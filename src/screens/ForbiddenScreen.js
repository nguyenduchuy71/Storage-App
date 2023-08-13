import React from 'react'
import forbiddenImage from '../assets/403-forbidden.jpg'
import styled from 'styled-components'

function ForbiddenScreen() {
  return (
    <ForbiddenScreenContainer>
        <img style={{objectFit: 'contain', width: '50%'}} src={forbiddenImage} alt='forbidden image' />
    </ForbiddenScreenContainer>
  )
}

export default ForbiddenScreen
const ForbiddenScreenContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`