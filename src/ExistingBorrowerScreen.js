import React, {useState, useEffect} from 'react';
import './NewBorrowerScreen.css';


function ExistingBorrowerScreen(props){
    const [name, setName] = useState(props.borrowerName);
    const [address, setAddress] = useState('');
    const [entityType, setEntityType] = useState();
    const [phone, setPhone] = useState('');

//    useEffect(() => {
//        setName(props.borrowerName)
//    }
//
//    );

   function handleSubmit(event) {
    alert('A name was submitted: ' + name);
    event.preventDefault();
    fetch("http://127.0.0.1:5000/result", {
        method:"POST",
        cache: "no-cache",
        headers:{
            "content_type":"application/json",
        },
        body:JSON.stringify([name, address, phone])
        }
    )
    .then(response => {
    return response.json()
  })
.then(json => {

  this.setName({name: json[0]})
  })
    }

    return(
        <div >
        <form className='bform' onSubmit = {handleSubmit} action="http://localhost:5000/result" method="post">
        <div>
                <label>Borrower Name:</label>
                <input readOnly={props.readOnlyMode} type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)}    />
            </div>
            <div>
                <label>Entity Type:</label>
                <select disabled = {props.readOnlyMode} name = 'entityType' value={entityType} onChange={(event)=>setEntityType(event.target.value)} >
                    <option value="Pty Ltd">Pty Ltd</option>
                    <option value="Ltd">Ltd</option>
                    <option value="Public">Public</option>
                </select>
            </div>
            <div>
                <label>Address:</label>
                <input readOnly={props.readOnlyMode} type="text" name="address" value={address} onChange={(event)=>setAddress(event.target.value)}  />
            </div>
            <div>
                <label>Phone Number:</label>
                <input readOnly={props.readOnlyMode} type="number" name="phone" value={phone} onChange={(event)=>setPhone(event.target.value)}   />
            </div>
            <div>
                <input disabled = {props.readOnlyMode} type="submit" value="Save" />
            </div>

        </form>

        </div>
    )
};

export default ExistingBorrowerScreen;


