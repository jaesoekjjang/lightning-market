import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logout from './Logout';
import Login from './Login';


const StyledUtility = styled.ul`
    list-style: none;
    padding: 0;
`;

const UtilityList = styled.li`
    float:left;
    margin-left: 30px;
    position: relative;

    & > * {
        color: black;
    }
`;


const Utility = () => {


    return <React.Fragment>
        <StyledUtility>
            <UtilityList className="utilityAfter"><Link to='/sell'>판매하기</Link></UtilityList>
            <UtilityList className="utilityAfter"><Link to='/mypage'>내상점</Link></UtilityList>
            <UtilityList><button>벼락톡</button></UtilityList>
            {/* <Login /> */}
            <UtilityList className="utilityAfter"><Link to='/login'>로그인</Link></UtilityList>
            <Logout />
        </StyledUtility>
    </React.Fragment >
}

export default Utility;