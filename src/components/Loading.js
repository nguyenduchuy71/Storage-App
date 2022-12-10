import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'

function Loading () {
  return (
    <AppLoading>
      <AppLoadingContents>
        <Spinner name='ball-spin-fade-loader' color='blue' fadeIn='none' />
      </AppLoadingContents>
    </AppLoading>
  )
}

export default Loading

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`
