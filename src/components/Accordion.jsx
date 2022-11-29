import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [display, setDisplay] = useState(false);

  const hideContent = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>{title}</p>
        <button onClick={hideContent}>Expand</button>
      </div>
      <p style={{ display: display ? 'block' : 'none' }}>{content}</p>
    </>
  );
};

const AccordionList = () => {
  const items = [
    {
      title: 'Lorem',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, assumenda. Debitis magnam omnis maxime esse assumenda, iste quos odio quia a reprehenderit placeat nemo deleniti sint quidem aperiam ullam fugit!',
    },
    {
      title: 'Ipsum',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, assumenda. Debitis magnam omnis maxime esse assumenda, iste quos odio quia a reprehenderit placeat nemo deleniti sint quidem aperiam ullam fugit!',
    },
  ];
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Accordion title={item.title} content={item.content} />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionList;
