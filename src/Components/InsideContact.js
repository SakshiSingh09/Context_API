import React, { useContext } from 'react';
import { ContactContext } from './ContextFile';

const InsideContact = () => {
    const {randomNumber} = useContext(ContactContext);
  return (
    <div>
      This is an inner contact
      <h1>Random Number: {randomNumber}</h1>
    </div>
  )
}

export default InsideContact;
