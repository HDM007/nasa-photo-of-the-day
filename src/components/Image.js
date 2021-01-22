import React from "react";
import styled from 'styled-components';

const Frame = styled.div`
  display: flex;
  border: 2px solid red;
  overflow: hidden;
  justify-content: space-around;
  max-width: 50%;
`

function Image(props) {
    const { nasaInfo } = props

    return (
        <Frame>
            <img src={nasaInfo.url} alt="nasa item of the day" width="100%"/>
        </Frame>
    )
}

export default Image;