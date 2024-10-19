import axios from 'axios';
import { useState, useEffect } from 'react';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div>
      <div>todo</div>
      {todos?.map((todo) => (
        <p key={todo.id} style={{ color: todo.completed ? 'green' : 'red' }}>
          {todo.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
