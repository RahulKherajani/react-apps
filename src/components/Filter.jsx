import React from 'react';
import { useState } from 'react';

const Filter = () => {
  const list = ['Apple', 'Banana', 'Pineapple', 'Guava'];
  const [filteredList, setFilteredList] = useState(list);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setFilteredList(list);
      return;
    }
    const values = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilteredList(values);
  };

  return (
    <div className='App'>
      <div>
        Search: <input type='text' onChange={handleSearch} />
      </div>
      <ul>
        {filteredList.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
