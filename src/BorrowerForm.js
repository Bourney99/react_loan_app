import React, {useState, useEffect} from 'react';
import './NewBorrowerScreen.css';


function BorrowerForm(props){
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [address, setAddress] = useState('');
    const [entityType, setEntityType] = useState('');
    const [phone, setPhone] = useState('');
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
      setId(props.borrower.id);
      setName(props.borrower.name);
      setAddress(props.borrower.address);
      setPhone(props.borrower.phone);
      },[props.borrower.id,props.borrower.name, props.borrower.address, props.borrower.phone]
      );



      function handleSubmit(event){
            event.preventDefault();
            let borrowerDetails = {'id':id,'name':name, 'address':address, 'phone':phone}
            props.onSubmit(borrowerDetails, event)

    }

//action="http://localhost:5000/result"   ---this is from the form
    return(
        <div>
        <form className='bform' onSubmit = {handleSubmit}  method="post">
        <div className ='binput'>
                <label>Borrower Name:</label>
                <input readOnly={updateMode} type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)}    />
            </div>
            <div className ='binput'>
                <label>Entity Type:</label>
                <select disabled = {updateMode} name = 'entityType' value={entityType} onChange={(event)=>setEntityType(event.target.value)} >
                    <option value="Pty Ltd">Pty Ltd</option>
                    <option value="Ltd">Ltd</option>
                    <option value="Public">Public</option>
                </select>
            </div>
            <div className ='binput'>
                <label>Address:</label>
                <input readOnly={updateMode} type="text" name="address" value={address} onChange={(event)=>setAddress(event.target.value)}  />
            </div>
            <div className ='binput'>
                <label>Phone Number:</label>
                <input readOnly={updateMode} type="number" name="phone" value={phone} onChange={(event)=>setPhone(event.target.value)}   />
            </div>
            <div>
                <button disabled = {updateMode} type="submit" value="Save">Save</button>
            </div>

            <div>
                <button type='button' onClick = {() => setUpdateMode(!updateMode) }>{updateMode ? 'Update' : 'Enquiry'} Mode</button>
            </div>

        </form>

        </div>
    )

}



export default BorrowerForm;