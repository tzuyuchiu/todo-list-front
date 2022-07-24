import React from 'react';
import './TodoItem.css';
function TodoItem({ item }) {
  // console.log(item);
  return (
    <div className="todoitem">
      <div>
        <p>{item}</p>
      </div>
      <div className="deleteButton">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
