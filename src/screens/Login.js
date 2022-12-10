import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.jpg'
import gooogle_logo from '../assets/google-logo.png'
import { auth, provider } from '../config/firebaseConfig.js'

function Login () {
  const signIn = e => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch(error => {
      alert(error.message)
    })
  }
  return (
    <LoginContainer>
      <img src={logo} alt='login_img' />
      <ButtonContainer onClick={signIn}>
        <img src={gooogle_logo} alt='google-logo' />
        <span>Sign in with Google</span>
      </ButtonContainer>
    </LoginContainer>
  )
}

export default Login
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
  > img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
    border: 2px solid #21130d;
  }
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  > span {
    font-size: 16px;
    font-weight: bold;
  }
`
