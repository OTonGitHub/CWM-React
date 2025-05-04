import Message from './components/Message';
import ListGroup from './components/LG';
import Alert from './components/Alert';
import Button from './components/Button';
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

const handleSetRegion = (item: string) => {
  console.log(item);
};

const handleDelete = () => {
  console.log('Deleted')
};

function App() {
  return (
    <div>
      <Message />
      <ListGroup items={regions} heading='Region' onSelect={handleSetRegion} />
      <Alert>
        Here is some useful information~ <span>{'\u2615'}</span>
      </Alert>
      <Alert variant='info'>Maybe not?</Alert>
      <div style={{display: 'flex', gap: '3px'}}>
        <Button onClick={() => null}>Confirm</Button>
        <Button onClick={handleDelete}variant='danger'>Delete</Button>
      </div>
    </div>
  );
}

export default App;
