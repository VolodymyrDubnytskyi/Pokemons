import React from 'react';

const Abilities = props => {
    console.log(props.abilities)
    return (
        <div className={'stats-container'}>
            <div className='stats-content-container'>
                <div>
                    <span>Name</span>
                    <span>Slot</span>
                    <span>Hidden</span>
                </div>
                {/* {props.abilities.map((item) => { */}
                    {/* // return ( */}
                        {/* // <div> */}
                            {/* <span>{item.ability.name}</span> */}
                            {/* <span>{item.slot}</span> */}
                            {/* <span>{item.is_hidden}</span> */}
                        {/* </div> */}
                    {/* // ); */}
                {/* })} */}
            </div>

        </div>
    );
}
export default Abilities