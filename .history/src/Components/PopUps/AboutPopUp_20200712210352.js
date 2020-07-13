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
                <p>Icons <a href='https://artage.io/en/icon-packs/original-windows-95-icons'>downloaded here</a>.</p>
                <p>Startup <a href='http://soundbible.com/1654-Windows-95-Startup.html'>sound downloaded here</a>.</p>
            </div>
        </div>
    );
}
export default AboutPopUp;