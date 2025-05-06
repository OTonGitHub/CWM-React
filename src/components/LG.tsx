import { type MouseEvent, useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelect: (event: MouseEvent, item: string, index: number) => void;
}

const ListGroup = ({ heading, items, onSelect }: Props) => {
  const [selected, setSelected] = useState(-1);

  return items.length === 0 ? (
    <p>N/A</p>
  ) : (
    <ul className='menu bg-base-200 rounded-box w-56 mb-4'>
      <li className='menu-title'>{heading}</li>
      {items.map((item, index) => (
        <li key={item}>
          <button
            className={index === selected ? 'menu-active' : ''}
            onClick={(e: MouseEvent) => {
              onSelect(e, item, index);
              setSelected(index);
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
