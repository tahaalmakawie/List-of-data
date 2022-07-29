import React from 'react';
import './Card.css';

const Card = ({ id, name, age, address, phone, type, deleteFunc }) => {
  return (
    <div
      className="cardWrapper"
      style={{ backgroundColor: type === 'boy' ? 'green' : 'pink' }}
    >
      <div>Name:{name}</div>
      <div>Age: {age}</div>
      <div>Adress: {address}</div>
      <div>Phone: {phone}</div>
      <div
        className="deleteBtn"
        onClick={(event) => deleteFunc(event, id)}
      >
        X
      </div>
    </div>
  );
};

export default Card;