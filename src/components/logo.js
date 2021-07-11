import React from 'react';
import styled,{css} from 'styled-components';



const StyledLogoBox = styled.a`
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--main-yellow);
`;

const StyledLogoImg = styled.img`
    width: 40px;
    height: 40px;
    vertical-align: top;
    margin-right: 10px;
`;



const Logo = () => {

    return <React.Fragment>
            <StyledLogoBox href="#">
                <StyledLogoImg src="thunder.png" alt="로고 이미지"/>
                벼락장터
            </StyledLogoBox>
        </React.Fragment>
}
    
export default Logo;