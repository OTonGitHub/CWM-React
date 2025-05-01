import { MouseEvent, useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListGroup({ heading, items, onSelect }: Readonly<Props>) {
  // avoiding dot to allow SonarScan
  const [selectIX, setSelectIX] = useState(-1);

  const handleClick = (event: MouseEvent, area: string, index: number) => {
    setSelectIX(index);
    console.log(
      `Clicked ${index + 1} (${event.pageX}, ${event.pageY}): ${area}`
    );
  };

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
              handleClick(e, item, index); // refactor to use set, aka remove handler
              onSelect(item);
            }}
          >
            {item}
          </button>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h2>{heading}</h2>
      {generateLG(items)}
    </>
  );
}

export default ListGroup;
