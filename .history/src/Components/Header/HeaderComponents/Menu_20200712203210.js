import React from 'react';
import { imgDvd, imgPc } from '../../../constans/images';

const Menu = props => {
    return (
        <div className={'nav-menu-container'}>
            <ul>
                <li className={'menu-item'}>
                    <img src={imgDvd} alt="window-95-dvd"  className={'menu-icons'}/>
                 GitHub Repo
                 </li>
                <li className={'menu-item'} onClick={props.showAboutPopUp}>
                    <img src={imgPc} alt="window-95-computer" className={'menu-icons'} />
                 About
                 </li>
                 <hr className={'decorative-hr-line'}/>
                <li className={'menu-item'}>Startup Sound:Off</li>
            </ul>
        </div>
    )
}
export default Menu;