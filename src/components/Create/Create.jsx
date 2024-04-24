import React, { useState } from 'react'
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Create = () => {
    let navigate= useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const postData = () => {
        // console.log(firstName);
        // console.log(lastName);
        axios.post(`https://63c11b6899c0a15d28e17d60.mockapi.io/Crud`, {
            firstName,
            lastName,
            
        })
        .then(() => {
            navigate('/')
        })
        
           }
  return (
    <Form className="create-form">
    <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>

    <Button onClick={postData} type='submit'>Submit</Button>
</Form>
  )
}

export default Create