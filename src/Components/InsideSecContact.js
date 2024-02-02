import React, { useContext } from 'react'
import { UserContext } from './ContextFile'

const InsideSecContact = () => {
    const {age}  = useContext(UserContext);
  return (
    <div>
      This is second contact.
      <h1>Age: {age}</h1>
    </div>
  )
}

export default InsideSecContact;
