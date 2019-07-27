import React from 'react';
import "./style.css";

function Hero () {
    return (
        <div className="jumbotron jumbotron-fluid text-center secondary-background image-overlay">
            <div className="image-text">
                <h1 className="display-4 hero-text"><i><strong>handShake</strong></i></h1>
                <p className="lead hero-subtext">Bringing trust to the residential contract community.</p>
            </div>
        </div>
    );
}

export default Hero;