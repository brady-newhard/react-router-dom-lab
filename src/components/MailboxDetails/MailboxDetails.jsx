import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

    return (
        <>
            <h1>Mailbox Details</h1>
            <p><strong>Box Number:</strong> {selectedBox._id}</p>
            <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
            <p><strong>Size:</strong> {selectedBox.boxSize}</p>
        </>
    );
}

export default MailboxDetails;