import React, { useState } from 'react';

import './App.css';

function App() {
  const list = [
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
  ];

  // state
  const [filterList, setFilterList] = useState(list);

  // Handler
  const handleSearch = (event) => {
    if (event.target.value === '') {
      // if the input is empty
      setFilterList(list);
    }

    // getting the filtered values from the default list
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );

    setFilterList(filteredValues);
  };

  return (
    <div className='App'>
      <div>
        Search: <input type='text' onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={`${item}-${index}`}>{item}</div>
        ))}
    </div>
  );
}

export default App;
