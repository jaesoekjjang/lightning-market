import React from 'react';
import styled from 'styled-components';

const RegisterWrapDiv = styled.section`
    margin: 0 auto;
    width: 1024px;
`

const InfoTitle = styled.h2`
    height: 100px;
    font-size: 26px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(30,29,41);
    font-weight: 400;
`

const RequiredInfo = styled.span`
    color: rgb(255, 80, 88);
    font-size: 1rem;
    margin-left: 2rem;
`

const InfoWrap = styled.ul`
    padding-top: 0.5rem;
`

const InfoLi = styled.li`
    width: 100%;
    display: flex;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(220, 219, 228);
`

const InfoSubTitle = styled.div`
    width: 10.5rem;
    font-size: 18px;
`

const Asterisk = styled.span`
    color: rgb(255, 80, 88);
`

const ProductTitleWrap = styled.div`
    display:flex;
    width: 100%;
    align-items: center;
`

const ProductTitle = styled.input`
    height: 3rem;
    padding: 0px 1rem;
    width: 100%;
`


const ProductRegister = ()=> {

    return <React.Fragment>
        <RegisterWrapDiv>
            <InfoTitle>
                기본정보
                <RequiredInfo>*필수항목</RequiredInfo>
            </InfoTitle>

            <InfoWrap>
                <InfoLi>
                    <InfoSubTitle>
                        상품이미지
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                </InfoLi>
                <InfoLi>
                    <InfoSubTitle className="titlePadding">
                        제목
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <div>
                        <ProductTitleWrap>
                            <ProductTitle type="text" placeholder="상품 제목을 입력해주세요."/>
                        </ProductTitleWrap>
                    </div>
                </InfoLi>
            </InfoWrap>

        </RegisterWrapDiv>
    </React.Fragment>
}

export default ProductRegister;