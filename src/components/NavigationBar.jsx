import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UpDown from './UpDown';
import RecentVisit from './RecentVisit';
import Jjim from './Jjim';


const Wrapper = styled.div`
  width: 8rem;
  margin:0 100px 0 auto;
  position:sticky;
  top:20%;
  right:5%;
`

const NavigationItems = styled.div`
  display:flex;
  flex-direction: column;
  width: 7.7rem;

  & > *{
  border:1px solid rgb(216, 214, 214);
  margin:0.5rem 1rem;
  }
`;

const ThumbSpan = styled.span`
  line-height: 3rem;
`


const NavigationBar = () => {

  const [jjim, setJjim] = useState(0);

  const jjimup = () => {
    setJjim((prev) => {
      return prev + 1;
    })
  }



  return (
    <React.Fragment>
      <Wrapper className="wrapper">
        <ThumbSpan onClick={jjimup}> Thumb </ThumbSpan>
        <NavigationItems className='navigation-bar'>
          <Jjim jjim={jjim} />
          <RecentVisit />
          <UpDown />
        </NavigationItems>
      </Wrapper>
    </React.Fragment>
  )
}

export default NavigationBar;