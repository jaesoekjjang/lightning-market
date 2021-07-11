import React from 'react';
import styled,{css} from 'styled-components';

const StyledWrapDiv = styled.div`
    border-bottom:var(--border-default);  
`

const StyledDiv = styled.div`
    width:1024px;
    margin: 0 auto;
    padding: 1.3rem 0;
`

const StyledUl = styled.ul`
    padding: 0px;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    list-style:none;
`

const StyledLi = styled.li`

`


const CategoryBar = () => {

    return <React.Fragment>
        <StyledWrapDiv>
            <StyledDiv>
                <StyledUl>
                    <StyledLi>전자제품</StyledLi>
                    <StyledLi>의류</StyledLi>
                    <StyledLi>애완용품</StyledLi>
                    <StyledLi>도서</StyledLi>
                    <StyledLi>스포츠</StyledLi>
                    <StyledLi>가구</StyledLi>
                    <StyledLi>게임</StyledLi>
                    <StyledLi>식물</StyledLi>
                </StyledUl>
            </StyledDiv>
        </StyledWrapDiv>
        
    </React.Fragment>
}

export default CategoryBar;