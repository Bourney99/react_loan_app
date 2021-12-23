import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './SearchBorrowerScreen.css';
import BorrowerForm from './BorrowerForm'


function SearchBorrowerScreen(props){


    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [searchedBorrower, setSearchedBorrower] = useState('')
    const [borrowerList, setBorrowerList] = useState(() => {
    fetch('/borrower_list').then(res => res.json()).then(data => {
      setBorrowerList(data.borrowers);
    })
    }

    , []);

function handleSubmit(borrower){
        //console.log(borrower)
        setName(borrower.name)
        setAddress(borrower.address)
        setPhone(borrower.phone)

    fetch("http://127.0.0.1:5000/result", {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify([id, borrower.name, borrower.address, borrower.phone])
        }
    )
    .then(response => {
    return response.json()
  }).then(json => {
  })

    console.log('Borrower updated')
    setBorrowerList(() => {
    fetch('/borrower_list').then(res => res.json()).then(data => {
      setBorrowerList(data.borrowers);
    })
    })
  }


  const handleOnSearch = (string, results) => {
//    console.log(string, results)
  }
  const handleOnSelect = (e) => {
    // the item selected
//    console.log(e)
    setSearchedBorrower(e)
    setId(e.id)
    setName(e.name)
    setAddress(e.address)
    setPhone(e.phone)

    fetch("http://127.0.0.1:5000/result", {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify([e.id, e.name, e.address, e.phone])
        }
    )
    .then(response => {
    return response.json()
  }).then(json => {
    setId(json.id)
    setAddress(json.address)
    setPhone(json.phone)
    setName(json.name)
     })
    }


    return (
    <div className ='home'>
       <div className='container'>
       <h1 className='heading'>Search for Borrower</h1>
        <ReactSearchAutocomplete
            items={borrowerList}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
          />

        <BorrowerForm
        className="borrowerContent"
        readOnlyMode = {props.readOnlyMode}
        borrower = {searchedBorrower}
        onSubmit = {handleSubmit}
        />
       </div>
      </div>
    )
}


export default SearchBorrowerScreen;
