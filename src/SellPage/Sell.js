import React from 'react'
import Header from '../CommonPage/header';
import CategoryBar from '../CommonPage/categoryBar';
import styled from 'styled-components';

const SellPageWrapper = styled.div`
  margin: 0 auto;
  width: 1024px;
  border: 1px solid black;
`

const Sell = () => {
  return (
    <React.Fragment>
      <Header />
      <CategoryBar />
      <SellPageWrapper className="wrapper">
        <h1>This is Sell Page</h1>
      </SellPageWrapper>
    </React.Fragment>
  )
}

export default Sell;