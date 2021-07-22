import React, { useContext } from 'react'
import styled from 'styled-components';
import { UserDispatch } from '../App';

const LogoutSpan = styled.span`
  margin-left: 1rem;
  cursor:pointer
`
const Logout = () => {
  const dispatch = useContext(UserDispatch);

  const Logout = () => {
    dispatch({
      type: "LOG_OUT"
    })
  }

  return (
    <LogoutSpan onClick={Logout}>로그아웃</LogoutSpan>
  )
}

export default Logout;