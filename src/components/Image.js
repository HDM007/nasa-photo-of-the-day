import React from "react";

function Image(props) {
    const { nasaInfo } = props

    return (
        <div className="image">
            <img src={nasaInfo.url} alt="nasa item of the day"/>
        </div>
    )
}

export default Image;