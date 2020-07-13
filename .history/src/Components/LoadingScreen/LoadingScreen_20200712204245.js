import React from 'react';
import { Hourglass } from 'react95';

const LoadingScreen = props => {
    return (
        <div className={'loading-screen-container'}>
            <div className={'windows-loader'} >
                <Hourglass size={40} />
            </div>
        </div>
    );
}
export default LoadingScreen;