import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import mailboxDetails from './components/MailboxDetails/MailboxDetails';
import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([
    { id: 1, 
      boxSize: 'Large', 
      boxOwner: 'Brady' 
    },
    { id: 2, 
      boxSize: 'Medium', 
      boxOwner: 'Casie' 
    },
    { id: 3, 
      boxSize: 'Small', 
      boxOwner: 'Dylan' 
    },
    { id: 4, 
      boxSize: 'Small', 
      boxOwner: 'Stone' 
    },
  ]);

  function addBox(mailbox) {
    setMailboxes([...mailboxes, mailbox]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
      </Routes>
    </>
  );
}

export default App;

