import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState('')

    async function fetchData() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
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
                {/* {setPokiContent.length > 0 && pokiContent.map((item) => {
                    console.log(item);
                    // <div className={'main-content-box'}>
                        
                    // </div>
                })} */}
            </div>
        </section>
    );
}
export default MainScreen;