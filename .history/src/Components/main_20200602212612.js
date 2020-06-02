import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState('')

    async function fetchData() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        res
            .json()
            .then(res => setPokiContent(res))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData();
        console.log(pokiContent);
    });

    return (
        <section className={'main-bg'}>
            <div className={'main-content'}>
                {pokiContent.length > 0 && pokiContent.results.map((item) => {
                    return (<div className={'main-content-box'}>
                        {item.name}
                    </div>);
                })}
            </div>
        </section>
    );
}
export default MainScreen;