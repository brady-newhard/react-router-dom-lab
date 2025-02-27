import React, { useState } from 'react'

function MailboxForm() {
    const [boxOwner, setBoxOwner] = useState('')
    const [newMailbox, setNewMailbox] = useState(
        { owner: '', size: ''}
    )
    const handleOwnerChange = (e) => {
        setBoxOwner(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxOwner([...boxOwner, newMailbox])
        setNewMailbox({ owner: '', size: ''})
    }

  return (
    <>
    <h1>New Mailbox Form</h1>
    <h3>Add a new mailbox to the list</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor='owner'>Box Owner:</label>
        <input type="text"
            value={boxOwner}
            onChange={handleOwnerChange} />
        <label htmlFor='size'>Box Size:</label>
        <select>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
        </select>
        <button type='submit'>Add Mailbox</button>
    </form> 
    </> 
  )
}

export default MailboxForm