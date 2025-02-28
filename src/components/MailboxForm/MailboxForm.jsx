import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MailboxForm({ addBox }) {
    const [newMailbox, setNewMailbox] = useState({
        boxOwner: '',
        boxSize: 'Small', 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewMailbox({
            ...newMailbox,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(newMailbox);  
        setNewMailbox({ boxOwner: '', boxSize: 'Small' }); 
        navigate('/mailboxes'); 
    };

    return (
        <>
            <h1>New Mailbox Form</h1>
            <h3>Add a new mailbox to the list</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Box Owner:</label>
                <input
                    type="text"
                    name="boxOwner"
                    value={newMailbox.boxOwner}
                    onChange={handleChange}
                />
                
                <label htmlFor="boxSize">Enter a Box Size:</label>
                <select name="boxSize" value={newMailbox.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                
                <button type="submit">Add Mailbox</button>
            </form>
        </>
    );
}

export default MailboxForm;