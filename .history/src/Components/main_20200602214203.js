import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState('')

    async function fetchData(url) {
        const res = await fetch(url);
        res
            .json()
            .then(res => {
                setPokiContent(res.results)
                setIsLoaded(true)
                pokiContent.map((item) =>{
                    fetchData(item.url)
                })
            })
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData(urlPoke);

    }, []);
    console.log(pokiContent);
    return (
        <section className={'main-bg'}>
            <div className={'main-content'}>
                {pokiContent.length > 0 && pokiContent.map((item) => {
                    return (<div className={'main-content-box'}>
                        {item.name}
                    </div>);
                })}
            </div>
        </section>
    );
}
export default MainScreen;