import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const urlPoke = 'https://pokeapi.co/api/v2/pokemon/'

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState([])
    // const [count, setCount] = useState(1)
    // let count = 1
    let arrrr = []
    const trye = e => {
        const test = []
        for (let i = 1; i <= 20; i++) {
            fetchData(i)
        }
        console.log(pokiContent);
    }
    async function fetchData(i) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        res
            .json()
            .then(res => {
                arrrr.push()
                setIsLoaded(true)
            })
            .catch(err => setErrors(err))
            console.log(arrrr);
    }

    useEffect(() => {
        trye();

    }, []);
    // console.log(pokiContent);

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