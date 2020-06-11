import React from 'react';

const AboutPopUp = props => {
    return (
        <div className={'aboutPopUp-container'}>
            <header className={'aboutPopUp-header'} >
                About
              <div>X</div>
            </header>
            <h1>Poké95</h1>
            <p>Built with
                <a href="https://reactjs.org/">React</a>
                 and
                 <a href="https://pokeapi.co/">PokeAPI</a>.</p>
            <p>Icons downloaded here.</p>
            <p>Startup sound downloaded here.</p>
        </div>
    );
}
export default AboutPopUp;