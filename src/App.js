import React, {useState} from 'react';
import './App.css';
import MainMenu from './MainMenu';
import MainScreen from './MainScreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewBorrowerScreen from './NewBorrowerScreen'
import SearchBorrowerScreen from './SearchBorrowerScreen'

function App() {
    const [readOnlyMode, setReadOnlyMode] = useState(false);
    const [screenType, setScreenType] = useState('Welcome')

    function handleClick(buttonName){
        if(buttonName==='UpdateMode'){
        setReadOnlyMode(!readOnlyMode)
        }
        else{
        setScreenType(buttonName)
        }

    }

    return(
        <div>
        <Router>

            <MainMenu readOnlyMode = {readOnlyMode} onClick={handleClick} />
                <Routes>
                <Route path='/borrowers/addNew' element={<NewBorrowerScreen
//                                                            readOnlyMode = {props.readOnlyMode}
                                                            sborrowerName=''
                                                            sborrowerAddress=''
                                                            sborrowerPhone=''
                                                            sborrowerId=''  />} />

                <Route path='/borrowers/search' element={<SearchBorrowerScreen  />}/>
            </Routes>
       </Router>
       </div>
    )
}

export default App;


//<MainScreen readOnlyMode = {readOnlyMode} screenType = {screenType}/>