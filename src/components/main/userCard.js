import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function UserCard(props)  {

        return(
            <Card style={{ width: '18rem' }}>
            
            <Card.Body>
              <Card.Title className="rounded-circle">{props.cardtitle.charAt(0)}</Card.Title>
              <Card.Title>{props.cardtitle}</Card.Title>
              <Card.Text>@{props.username}</Card.Text>
              <Card.Text className="website">http://{props.site}</Card.Text>
              <Link to={`/user/${props.id}`}>More Details</Link>
             
            </Card.Body>
          </Card>
        );
}
