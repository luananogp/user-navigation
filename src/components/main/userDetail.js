import React from 'react';
import {Card} from 'react-bootstrap';


export default function UserDetail(props)  {

        return(
            <Card style={{ width: '18rem' }}>
            
            <Card.Body className="userdata">
              <Card.Title>name:{props.cardtitle}</Card.Title>
              <Card.Title>username: @{props.username}</Card.Title>
              <Card.Title>email:{props.email}</Card.Title>
              <Card.Title>phone:{props.phone}</Card.Title>
              <Card.Title>company:{props.company}</Card.Title>   
              <Card.Title>Address:</Card.Title>  
              <Card.Title>Street:{props.street}</Card.Title>
              <Card.Title>Suite:{props.suite}</Card.Title> 
              <Card.Title>City:{props.city}</Card.Title>     
              <Card.Title>Zipcode:{props.zipcode}</Card.Title>             
            </Card.Body>
          </Card>
        );
}

//name, username, email, phone, company, website, address