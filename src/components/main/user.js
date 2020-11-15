import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Axios from 'axios';
import UserDetail from './userDetail';

export default function User ()  {
    const [user, setUser] = useState (null)
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        Axios
            .get (`https://jsonplaceholder.typicode.com/users/${id}`)
            .then (res => {
                console.log ("user api", res)
                setUser (res.data)
            })
            .catch (err => {
                console.log (err)
            })
   
        }, [])
    
        return(
            <div>
                {
                    user && (<UserDetail id={user.id} cardtitle={user.name} username={user.username} email={user.email} site={user.website} phone={user.phone} company={user.company.name} street={user.address.street} suite={user.address.suite} city={user.address.city} zipcode={user.address.zipcode} />)
                }
                

            </div>
        );
}

