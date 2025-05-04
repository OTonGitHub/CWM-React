import { useState, MouseEvent } from 'react';

import Message from './components/Message';
import ListGroup from './components/LG';
import Alert from './components/Alert';
import Button from './components/Button';
import Modal from './components/Modal';
import './App.css';

const regions =
  Math.random() < 0.7
    ? [
        "Male'",
        "Hulhumale' Phase 1",
        "Hulhumale' Phase 2",
        "Villi Male'",
        'Addu',
      ]
    : [];

const handleSetRegion = (e: MouseEvent, region: string, index: number) => {
  console.log(
    `Clicked ${index + 1} (${e.pageX}, ${e.pageY}): ${region}`
  );
};

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Message />
      <ListGroup items={regions} heading='Region' onSelect={handleSetRegion} />

      <div style={{ display: 'flex', gap: '3px' }}>
        <Button onClick={() => null}>Confirm</Button>
        <Button onClick={() => setShowAlert(true)} variant='danger'>
          Delete
        </Button>
      </div>

      {showAlert && (
        <Alert
          variant='danger'
          strong='Are you sure?'
          onDismiss={() => setShowAlert(false)}
        >
          Deleting this item is a permenant action. <span>{'\u2615'}</span>
        </Alert>
      )}

      <Modal />
    </div>
  );
}

export default App;
