import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Registration from './Register'
import Login from './Login'

export default function TabOpt() {
  return (
    <>
    <h1 className="tab-heading" align="center">To-do App</h1>
    <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" className="mb-3 tabform">
        <Tab eventKey="signup" title="Sign Up" className='tab'>
            <Registration className="register" />
        </Tab>
        <Tab eventKey="signin" title="Sign In" className='tab'>
            <Login/>
        </Tab>
    </Tabs>
    </>
  )
}
