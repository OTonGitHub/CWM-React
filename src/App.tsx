import { useState, MouseEvent } from 'react';

import Message from './components/Message';
import ListGroup from './components/LG';
import Alert from './components/Alert';
import Button from './components/Button';
import Modal from './components/Modal';

import './App.css';

const regions =
  Math.random() < 0.9
    ? [
        "Male'",
        "Hulhumale' Phase 1",
        "Hulhumale' Phase 2",
        "Villi Male'",
        'Addu',
      ]
    : [];

const confirmModal = '1';

const handleSetRegion = (e: MouseEvent, region: string, index: number) => {
  console.log(`Clicked ${index + 1} (${e.pageX}, ${e.pageY}): ${region}`);
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className='w-full px-4 py-8 md:px-8 lg:px-16'>
      <Message />
      <ListGroup items={regions} heading='Region' onSelect={handleSetRegion} />

      <div className='flex gap-3 mt-4 mb-4'>
        <Button onClick={() => setShowConfirmModal(true)}>Confirm</Button>
        <Button onClick={() => setShowAlert(true)} type='danger'>
          Delete
        </Button>
      </div>

      {showAlert && (
        <Alert
          heading='Are you sure?'
          variant='error'
          onDismiss={() => setShowAlert(false)}
        >
          This will delete the Task permenantly!
        </Alert>
      )}

      <Modal
        heading='Region Selected!'
        id={confirmModal}
        open={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
      >
        This region will be used in your submission form.
      </Modal>
    </div>
  );
}

export default App;
