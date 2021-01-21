import React from "react";

function Header(props) {
    const { nasaInfo } = props

    return (
        <header className="headerDate">
            <h1>Nasa Photo of the Day : {nasaInfo.date}</h1>
        </header>
    )
}

export default Header;