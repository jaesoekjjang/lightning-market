import React, { useState } from 'react'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  padding: 0 1rem;
  position: relative;
  z-index:1;

  }
  &>ul{
    position:absolute;
    list-style:none;
    // z-index:-1;
    bottom:-300%;
    opacity: 0;
    transition: bottom 0.3s;
  }

  &>ul::before{
    content:'';
    display:block;
    height:2.31rem;


  }

  &:hover > ul{
    // background-color: grey;
    display:block;
    bottom: -500%;
    opacity: 1;
  }
`


const StyledLi = ({ val, sub }) => {
  const subCategories = sub.map((v) => <li>{v}</li>)

  return (
    <WrapperDiv>
      <li>
        {val}
      </li>
      <ul>
        {subCategories}
      </ul>
    </WrapperDiv>
  )
}

export default StyledLi;