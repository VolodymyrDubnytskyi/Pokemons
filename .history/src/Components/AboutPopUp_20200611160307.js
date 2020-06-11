import React from 'react';

const AboutPopUp = props => {
    return (
        <div className={'aboutPopUp-container'}>
            <header className={'aboutPopUp-header'} >
                About
              <div>X</div>
            </header>
            <h2>Poké95</h2>
            <p>Built with React and PokeAPI.</p>
            <p>
                Icons downloaded here.
                <br />
                Startup sound downloaded here.
            </p>
        </div>
    );
}