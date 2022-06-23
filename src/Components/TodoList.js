import React from 'react';
import TodoItems from './Todo-items';

export default function TodoList({ todos, toggleTodoItems }) {
  
  return (
    todos.map(todoitems => {
        return <TodoItems key={TodoItems.id} toggleTodoItems={toggleTodoItems} todoitems={todoitems} />
      })
  )
}
