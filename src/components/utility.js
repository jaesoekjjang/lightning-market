import React from 'react';
import styled,{css} from 'styled-components';

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
            <UtilityList className="utilityAfter"><a href="#">판매하기</a></UtilityList>
            <UtilityList className="utilityAfter"><a href="#">내상점</a></UtilityList>
            <UtilityList><button>벼락톡</button></UtilityList>
        </StyledUtility>
    </React.Fragment>
}

export default Utility;