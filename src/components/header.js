import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './logo'
import Search from './search'
import Utility from './utility'

const StyledHeader = styled.header`    
    padding-top: 45px;
    padding-bottom: 30px;
    // align-items: center;
    // display: flex;
    // justify-content: space-between;
    border-bottom:var(--border-default);  
`;

const StyledDiv = styled.div`
    width:1024px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

const Header = () => {
    return <React.Fragment>
        <StyledHeader>
            <StyledDiv>
                <Logo />
                <Search />
                <Utility />
            </StyledDiv>
        </StyledHeader>
    </React.Fragment>
}

export default Header;