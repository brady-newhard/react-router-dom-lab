import React from 'react';
import { Link } from 'react-router-dom';
import './MailboxList.css';

function MailboxList({ mailboxes }) {
    return (
        <>
            <h1>Mailboxes</h1>
            <div className="mailbox-container">
                {mailboxes.map((mailbox) => (
                    <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
                        <p>Owner: {mailbox.boxOwner}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default MailboxList;