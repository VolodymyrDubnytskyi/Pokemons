import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [pokiContent, setPokiContent] = useState('')

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/')
            .then((result) => {
                setIsLoaded(true)
                setPokiContent(result)
                console.log(pokiContent);
            })
    });


    return (
        <section className={'main-bg'}>

        </section>
    );
}
export default MainScreen;