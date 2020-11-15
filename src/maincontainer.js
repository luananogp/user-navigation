import React, {useState, useEffect, Fragment}  from 'react'
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import UserCard  from './components/main/userCard';



function DataFetching (){
    const [users, setUsers] = useState ([])
        
    useEffect(() => {
        axios
            .get (`https://jsonplaceholder.typicode.com/users/`)
            .then (res => {
                console.log ("user api", res)
                setUsers (res.data)
            })
            .catch (err => {
                console.log (err)
            })
   
        }, [])

        return (
            <Fragment>                       
            <Row>                           
                {users.map((user, index) => {
                return (
                <Col key={index}>
                    <UserCard id={user.id} cardtitle={user.name} username={user.username} site={user.website} />
                </Col>
                )         
            })}
            </Row>
            </Fragment>   
            
                  
        )




}

export default DataFetching
