import React from 'react';
import Todoitems from './Todo-items';

export default function TodoList({ todos, toggleTodoItems }) {
  return (
    todos.map(todoitems => {
        return <Todoitems key={todoitems.id} toggleTodoItems={toggleTodoItems} todoitems={todoitems} />
      })
  )
}
