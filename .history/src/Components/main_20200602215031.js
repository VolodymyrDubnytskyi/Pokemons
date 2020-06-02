import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState([])
    const [count, setCount] = useState(1)

    async function fetchData() {
        for (let i = 0; i < 20; i++) {
            setCount((count + 1))
            console.log(count);
            // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`);
            // res
            //     .json()
            //     .then(res => {
            //         setPokiContent([pokiContent, res])
            //         setIsLoaded(true)
            //     })
            //     .catch(err => setErrors(err))
        }

    }

    useEffect(() => {
        fetchData();

    },[]);
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