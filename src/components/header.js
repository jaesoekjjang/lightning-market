import React from 'react';
import styled,{css} from 'styled-components';
import Logo from './logo'
import Search from './search'
import Utility from './utility'

const StyledHeader = styled.header`
    width: 1024px;
    margin: 0 auto;
    padding-top: 45px;
    align-items: center;

    display: flex;
    justify-content: space-between;
`;

const Header = () => {
    return <React.Fragment>
        <StyledHeader>
            <Logo/>
            <Search/>
            <Utility/>
        </StyledHeader>
    </React.Fragment>
}

export default Header;