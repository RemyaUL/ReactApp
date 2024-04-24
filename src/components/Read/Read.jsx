import React, { useEffect, useState } from 'react';
import {Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'



const Read = () => {
    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://63c11b6899c0a15d28e17d60.mockapi.io/Crud`)
            .then((response) => {
                setAPIData(response.data);
            })
       
}, [])
const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
  
}
const getData = () => {
    axios.get(`https://63c11b6899c0a15d28e17d60.mockapi.io/Crud`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
const onDelete = (id) => {
    axios.delete(`https://63c11b6899c0a15d28e17d60.mockapi.io/Crud/${id}`)
    .then(() => {
        getData();
    })
  }
  return (
    <div>
    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
               
            </Table.Row>
        </Table.Header>

        <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
          
           <Link to='/update'>
  <Table.Cell> 
     <Button onClick={() => setData(data)}>Update</Button>
   </Table.Cell>
</Link>

<Table.Cell>
   <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
                  </Table.Row>
   )})}
</Table.Body>
    </Table>
</div>
  )
}

export default Read