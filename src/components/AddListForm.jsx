import React from 'react';
import { useState } from 'react';
function AddListForm({ addItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { item };
    addItem(newItem);
  };
  console.log('item', item);
  return (
    <div>
      <h3>Add To Do Item</h3>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Item : </label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="e.g. Workout"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
        </div>
        <input type="submit" value="Add item" />
      </form>
    </div>
  );
}

export default AddListForm;
