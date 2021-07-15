import React from 'react'
import Header from '../CommonPage/header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SellRouter from './SellRouter';
import ProductRegister from './ProductRegister';

const SellPageWrapper = styled.div`
  margin: 0 auto;
  width: 1024px;
  border: 1px solid black;
`

const Sell = () => {
  return (
    <React.Fragment>
      <Header />
      <SellPageWrapper className="wrapper">
        <ul>
          <li><Link to='/sell/post'>상품등록</Link></li>
          <li><Link to='/sell/manage'>상품관리</Link></li>
          <li><Link to >구매/판매 내역</Link></li>
        </ul>
      </SellPageWrapper>
      <ProductRegister/>
    </React.Fragment>
  )
}

export default Sell;