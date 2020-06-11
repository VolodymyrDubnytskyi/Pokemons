import React from 'react';
import { imgDvd, imgPc } from '../../assets/imgDvd';
let dvdImg = '' 

const Menu = props => {
    return (
        <div className={'nav-menu-container'}>
            <ul>
                <li>
                    <img src={imgDvd} alt="" />
                 GitHub Repo
                 </li>
                <li>
                    <img src={imgPc} alt="" />
                 About
                 </li>
                <li>Startup Sound:Off</li>
            </ul>
        </div>
    )
}
export default Menu;