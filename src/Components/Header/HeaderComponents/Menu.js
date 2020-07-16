import React, { useRef } from "react";
import { imgDvd, imgPc } from '../../../constans/images';
import useOutsideClick from '../../../constans/useOutsideClick'

const Menu = props => {
    const { showAboutPopUp, showMenu } = props;

    const ref = useRef();
    useOutsideClick(ref, () => {
        showMenu();
      });
      
    return (
        <div className={'nav-menu-container'} ref={ref}>
            <ul>
                <li className={'menu-item'}>
                    <img src={imgDvd} alt="window-95-dvd" className={'menu-icons'} />
                    <a href='' className={'menu-links'}>GitHub Repo</a>
                 </li>
                <hr className={'decorative-hr-line'} />
                <li className={'menu-item'} onClick={showAboutPopUp}>
                    <img src={imgPc} alt="window-95-computer" className={'menu-icons'} />
                    <a href='' className={'menu-links'}>About</a>
                 </li>
            </ul>
        </div>
    )
}
export default Menu;