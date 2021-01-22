import React from "react";
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: mistyrose;
  font-size: 0.5rem;
`;

function Header(props) {
    const { nasaInfo } = props

    return (
        <Wrapper>
            <h1>Nasa Photo of the Day : {nasaInfo.date}</h1>
        </Wrapper>
    )
}

export default Header;