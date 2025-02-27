import React from 'react'

function MailboxDetails() {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

  return (
    <div>MailboxDetails</div>
  )
}

export default MailboxDetails