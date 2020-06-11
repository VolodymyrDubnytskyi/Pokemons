import React from 'react';
import { imgDvd, imgPc } from '../../assets/imgDvd';
let dvdImg = '' 

const Menu = props => {
    return (
        <div className={'nav-menu-container'}>
            <ul>
                <li className={'menu-item'}>
                    <img src={imgDvd} alt="window-95-dvd"  className={'menu-icons'}/>
                 GitHub Repo
                 </li>
                <li className={'menu-item'}>
                    <img src={imgPc} alt="window-95-computre" className={'menu-icons'} />
                 About
                 </li>
                <li>Startup Sound:Off</li>
            </ul>
        </div>
    )
}
export default Menu;