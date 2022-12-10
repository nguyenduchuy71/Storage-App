import React from "react";
import styled from "styled-components";
import { auth } from "../config/firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";

function ProfilePage() {
    const [user] = useAuthState(auth);
  return (
    <LoginContainer>
        <h1>Profile page of {user?.displayName}</h1>
    </LoginContainer>
  );
}

export default ProfilePage;
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

