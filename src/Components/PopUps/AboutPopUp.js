import React from 'react';
import {reactUrl , pokeAPI} from '../../constans/urls'

const AboutPopUp = props => {
    const { closeAboutPopUp} = props;
    return (
        <div className={'aboutPopUp-container'}>
            <header className={'aboutPopUp-header'} >
                About
              <div onClick={closeAboutPopUp}>X</div>
            </header>
            <div className={'aboutPopUp-content-container'}>
                <h1>Poké95</h1>
                <p>Built with <a href={reactUrl}>React</a> and <a href={pokeAPI}>PokeAPI</a>.</p>
            </div>
        </div>
    );
}
export default AboutPopUp;