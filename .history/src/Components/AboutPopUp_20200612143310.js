import React from 'react';

const AboutPopUp = props => {
    return (
        <div className={'aboutPopUp-container'}>
            <header className={'aboutPopUp-header'} >
                About
              <div>X</div>
            </header>
            <div className={'aboutPopUp-content-container'}>
                <h1>Poké95</h1>
                <p>Built with <a href="https://reactjs.org/">React</a> and <a href='https://pokeapi.co/'>PokeAPI</a>.</p>
                <p>Icons <a href='https://artage.io/en/icon-packs/original-windows-95-icons'>downloaded here.</a></p>
                <p>Startup <a href='http://soundbible.com/1654-Windows-95-Startup.html'></a> sound downloaded here.</p>
            </div>
        </div>
    );
}
export default AboutPopUp;