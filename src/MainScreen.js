import React from 'react';
import './MainScreen.css';
import NewBorrowerScreen from './NewBorrowerScreen'
import SearchBorrowerScreen from './SearchBorrowerScreen'


function WelcomeScreen(){
    return(
    <div>
    <p>maybe a search bar here</p>
    </div>
    )
}



function MainScreen(props){
    let element


    if (props.screenType === 'Home'){
        element = <WelcomeScreen />
    }
    if (props.screenType === 'New Borrower'){
        element = <NewBorrowerScreen readOnlyMode = {props.readOnlyMode}
        sborrowerName=''
        sborrowerAddress=''
        sborrowerPhone=''
        sborrowerId='' />
    }
    if (props.screenType === 'Search Borrowers'){
        element = <SearchBorrowerScreen readOnlyMode = {props.readOnlyMode}  />
    }
//    if (props.screenType === 'Existing Borrower'){
//        element = <SearchBorrowerScreen readOnlyMode = {props.readOnlyMode} borrowerName={handleClick} />
//    }

    return(
    <div className='main'>
    <h1 className='title'>{props.screenType}</h1>
    {element}
    </div>
    )

}



export default MainScreen;