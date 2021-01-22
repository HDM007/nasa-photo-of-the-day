import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 0.5rem;
`;


function Placard(props) {
    const { nasaInfo } = props

    return (
        <Wrapper>
            <p>{nasaInfo.explanation}</p>
        </Wrapper>
    )
}

export default Placard;