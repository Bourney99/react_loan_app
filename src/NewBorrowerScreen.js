import React, { useState } from 'react';
import './NewBorrowerScreen.css';
import BorrowerForm from './BorrowerForm'

function NewBorrowerScreen(props){

    const [blankBorrower, setBlankBorrower] = useState({'id': "", 'name': '', 'address':'', 'phone': ''});


    function clearFields(event) {
       // we have to convert event.target to array
       // we use from method to convert event.target to array
       // after that we will use forEach function to go through every input to clear it
       Array.from(event.target).forEach((e) => (e.value = ""));
     }

   function handleSubmit(borrower, event) {
           clearFields(event);
   //update our states
   // why we should update our states to empty string
   // if we have not done it we clears the fields but we still have the data in our states
   // if the  user submit the form without any data but our states still has the previous data
   //update title

    const gb = ()=>setBlankBorrower({'id': "", 'name': '', 'address':'', 'phone': ''})

    alert('A name was submitted: ' + borrower.name);

    fetch("http://127.0.0.1:5000/new_borrower", {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify([borrower.name, borrower.address, borrower.phone])
        }
    )
    .then(response => {
    return response.json()
  })
.then(json => {
console.log(json[0])
  })
    }

    return(
    <div className = 'home'>
    <div className = 'container'>
    <h1 className='heading'>Add new Borrower</h1>
    <BorrowerForm onSubmit = {handleSubmit} borrower = {blankBorrower} readOnlyMode = {props.readOnlyMode} />
    </div>
    </div>

    )
};

export default NewBorrowerScreen;


