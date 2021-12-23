import React, { useState } from 'react';
import styled from 'styled-components'
//import './MainMenu.css';
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {MainMenuData} from './MainMenuData'
import SubMenu from './SubMenu'
import {IconContext} from 'react-icons/lib'


const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display:flex;
justify-content: flex-start;
align-items:center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display:flex;
    justify-content:center;
    position: fixed;
    top:0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition:500ms;
    z-index:10;
`;

const SidebarWrap = styled.div`
    width:100%;
`;

function MainMenu(props){
    const [sidebar, setSidebar] = useState(true);

    function showSidebar(){
        setSidebar(!sidebar)
    }


    function handleClick(event){
        props.onClick(event.target.name)
    }

    return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar} />
         </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
            <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
             </NavIcon>
             {MainMenuData.map((item, index)=> {
             return<SubMenu item={item} key={index} />;
             })}

        </SidebarWrap>

    </SidebarNav>

    </IconContext.Provider>
    </>
    )

}


export default MainMenu;

//<div className='mainMenu'>
// <button className='mainMenuButton' name='Home' onClick={handleClick}>Home</button>
//        <div className='dropdown'>
//            <button disabled className='mainMenuButton dropbtn' name='Borrowers' onClick={handleClick}>Borrowers</button>
//                <button className='mainMenuButton dropdown-content' name='Search Borrowers' onClick={handleClick}>Search Borrowers</button>
//                <button className='mainMenuButton dropdown-content' name='New Borrower' onClick={handleClick}>New Borrower</button>
//        </div>
//        <button className='mainMenuButton dropbtn' name='Deals' onClick={handleClick}>Deals</button>
//        <button className='modeButton'  name='UpdateMode'onClick={handleClick}>{props.readOnlyMode ? 'Update' : 'Enquiry'} Mode</button>

//</div>