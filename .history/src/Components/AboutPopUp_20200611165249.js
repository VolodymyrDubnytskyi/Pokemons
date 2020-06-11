import React from 'react';

const AboutPopUp = props => {
    return (
        <div className={'aboutPopUp-container'}>
            <header className={'aboutPopUp-header'} >
                About
              <div>X</div>
            </header>
            <h1>Poké95</h1>
            <p>Built with React and PokeAPI.</p>
            <p>Icons downloaded here.</p>
            <p>Startup sound downloaded here.</p>
        </div>
    );
}
export default AboutPopUp;