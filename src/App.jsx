import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import './App.css';

function App() {
    const [mailboxes, setMailboxes] = useState([]);

    function addBox(mailbox) {
        const newId = mailboxes.length + 1;
        setMailboxes([...mailboxes, { ...mailbox, _id: newId }]);
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<main><h1>Welcome to the Post Office</h1></main>} />
                <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
                <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
                <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
            </Routes>
        </>
    );
}

export default App;