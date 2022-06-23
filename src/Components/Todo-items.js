import React, {useState, useRef, useEffect }from "react";
import { Button, Form,  FloatingLabel } from 'react-bootstrap';
import uuid from "react-uuid";
import TodoList from "./Todo-list";


const storedTodos = 'todoApp.todos'

 function TodoItems () {
  
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(storedTodos))
    if (storeTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
   localStorage.setItem(storedTodos, JSON.stringify(todos))
 }, [todos])

  function toggleTodoItems(id) {
   const newTodos = [...todos]
   const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false}]
   })
    todoNameRef.current.value = null
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
   setTodos(newTodos)
  }

  return (
    <>
    <Form className="todo-card">
    <Form.Group md>
              <FloatingLabel controlId="floatingInputGrid" label="To-do task" className="floating-label">
              <Form.Control type="text" placeholder="" ref={todoNameRef}/>
              </FloatingLabel>
          </Form.Group>
          <Form.Group md>
              <FloatingLabel controlId="floatingSelectGrid" label="Urgency" className="floating-label">
              <Form.Select aria-label="Floating label select example">
                  <option>---</option>
                  <option value="1" className="opt1"></option>
                  <option value="2" className="opt2"></option>
                  <option value="3" className="opt3"></option>
              </Form.Select>
              </FloatingLabel>
          </Form.Group>
          <Form.Group md className="buttons-itemscard">
            <Button onClick={handleAddTodo}>Add to list</Button>
            <Button onClick={handleClearTodos}>Complete</Button>
            <Button>Remove from list</Button>
          </Form.Group>
  </Form> 
  <div>
  <TodoList todos={todos} toggleTodo={toggleTodoItems} />
  </div>
  </>
  );
};

export default TodoItems;