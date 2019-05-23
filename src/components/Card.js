import React from 'react';
import './Card.css';

const Card = ({ pictureUrl, name, popularity, index, deleteContact }) => {
    
    return (
        <tr className="contact_row">
            <td>
            <img className="picture" src={pictureUrl} alt={name}/>            
            </td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={ ()=>{deleteContact(index)} }>Delete Me</button></td>
        </tr>  
    );
}

export default Card;