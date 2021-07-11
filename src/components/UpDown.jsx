import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


const UpDownBtn = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `

//요소 각각에 attribute 적용 안됨. e.g) border-bottom:1px solid black;
const UpBtn = styled.span`
  height:2rem;
  border-bottom:0.5px solid rgb(216, 214, 214);
  padding-top:0.3rem;

`

const DownBtn = styled.span`
height: 2rem;
padding-top: 0.3rem;
`
const IconSize = styled.img`
  width: 0.9rem;
`

const UpDown = () => {


  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setPosition(window.scrollY));
  }, [])

  const upRef = React.useRef(null);
  const btmRef = React.useRef(null);
  const bodyHeight = document.body.offsetHeight;

  useEffect(() => {
    if (position <= bodyHeight * 0.25) {
      upRef.current.style.display = 'none';
      btmRef.current.style.display = 'inline';
    } else if (position < bodyHeight * 0.5) {
      upRef.current.style.display = 'inline';
      btmRef.current.style.display = 'inline';
    } else {
      upRef.current.style.display = 'inline';
      btmRef.current.style.display = 'none';
    }
  }, [position])

  const toTop = () => {
    window.scrollTo(0, 0);
    console.log(position);
  }

  const toBtm = () => {
    window.scrollTo(0, bodyHeight);
  }

  return (

    <React.Fragment>
      <UpDownBtn className='up-down'>
        <UpBtn ref={upRef} className='upBtn high' onClick={toTop} >
          <IconSize src="arrow-up.svg" alt="" />
        </UpBtn>
        <DownBtn ref={btmRef} className='dwnBtn' onClick={toBtm}>
          <IconSize src="arrow-down.svg" alt="" />
        </DownBtn>
      </UpDownBtn>
    </React.Fragment>
  )
}

export default UpDown;
