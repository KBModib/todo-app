import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import TodoItems from  './Todo-items';
import Clock from 'react-live-clock';


function Todo () {

  const handleClick=()=>{
   
    localStorage.clear();
    window.location.assign("/");
}
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="#" className='nav-name'>To-Do List</Navbar.Brand>
          <button className="nav-buttons" onClick={handleClick}>Sign out</button>
          <Clock
          date={''}
          format={'dddd, MMMM DD, YYYY, HH:mm '} />
      </Navbar>
      <TodoItems />
     
    </>
  )
}

export default Todo;
