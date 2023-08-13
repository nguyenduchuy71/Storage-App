import React from 'react'
import './App.css'
import Login from './screens/Login'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProfilePage from './screens/ProfilePage'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './config/firebaseConfig.js'
import Spinner from 'react-spinkit'
import ProjectDetail from './screens/ProjectDetail'
import ProjectScreen from './screens/ProjectScreen'
import StorageScreen from './screens/StorageScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import ForbiddenScreen from './screens/ForbiddenScreen'

function App () {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name='ball-spin-fade-loader' color='blue' fadeIn='none' />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Switch>
                <Route path='/profile' component={ProfilePage} />
                <Route path='/project/:id' component={ProjectDetail} />
                <Route path='/projects' component={ProjectScreen} />
                <Route path='/storages' component={StorageScreen} />
                <Route path='/forbidden' component={ForbiddenScreen} />
                <Route path='/' component={HomeScreen} exact />
                <Route path='*' component={NotFoundScreen} />
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
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
