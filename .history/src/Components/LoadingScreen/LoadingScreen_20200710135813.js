import React from 'react';
import { Hourglass } from 'react95';
const LoadingScreen = props => {
    return (
        <div className={'loading-screen-container'}>
            <h1>works</h1>
            <Hourglass size={40}/>
        </div>
    );
}
export default LoadingScreen;