import React, { useState, useRef, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import Todo from  './Todo-items'
function Todo () {
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="#" className='nav-name'>To-Do List</Navbar.Brand>
        <Button>Sign out</Button>
      </Navbar>
      <Todo />
    </>
  )
}
export default Todo;
