import { type MouseEvent, useState} from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelect: (event: MouseEvent, item: string, index: number) => void;
}

const ListGroup = ({ heading, items, onSelect }: Props) => {
  const [selectIX, setSelectIX] = useState(-1);

  const generateLG = (list: string[]) => {
    if (list.length === 0) return <p>N/A</p>;
    return (
      <ul className='list-group'>
        {list.map((item, index) => (
          <button
            key={item}
            className={
              index === selectIX
                ? 'list-group-item list-group-item-action active'
                : 'list-group-item list-group-item-action'
            }
            onClick={(e) => {
              onSelect(e, item, index);
              setSelectIX(index);
            }}
          >
            {item}
          </button>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>{heading}</h2>
      {generateLG(items)}
    </div>
  );
}

export default ListGroup;