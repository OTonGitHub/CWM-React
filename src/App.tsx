import Message from './components/Message';
import ListGroup from './components/ListGroup';
import './App.css';

const regions =
  Math.random() < 0.3
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

function App() {
  return (
    <div>
      <Message />
      <ListGroup items={regions} heading='Region' onSelect={handleSetRegion} />
    </div>
  );
}

export default App;
