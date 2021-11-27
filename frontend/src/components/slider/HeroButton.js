import React from 'react'

function HeroButton(props) {
    return (
        <div className="button-wrapper">
            <a className="hero-button" href={'/' + props.url}>{props.title}</a>
        </div>
    )
}

export default HeroButton;
