import React from 'react';
import { useState, useEffect } from 'react';
import AddListForm from './AddListForm';
import TodoItem from './TodoItem';
import axios from 'axios';
import './TodoList.css';
const API_URL = 'http://localhost:3000';

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const addItem = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  };
  console.log('all items', todoItems);

  useEffect(() => {
    axios
      .get(`${API_URL}/todo`)
      .then((res) => {
        console.log(res.data);
        setTodoItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const initialItems = [
  //   { item: 'Do grocery' },
  //   { item: 'Watch movie' },
  //   { item: 'Clean dishes' },
  // ];

  return (
    <div className="todolist">
      <ul>
        {todoItems.map((item) => (
          <li>
            <TodoItem {...item} />
          </li>
        ))}
      </ul>

      <AddListForm addItem={addItem} />
    </div>
  );
}

export default TodoList;
