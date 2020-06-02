import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MainScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState('')
    const [pokiContent, setPokiContent] = useState('')
    
    async function fetchData (){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        res
        .json()
        .then(res =>setPokiContent(res))
        .catch(err => setErrors(err))
    } 

      
    useEffect(() => {
        fetchData();
        console.log(pokiContent);
    });

    //  setIsLoaded(true)
    // setPokiContent(result)
    


    return (
        <section className={'main-bg'}>

        </section>
    );
}
export default MainScreen;