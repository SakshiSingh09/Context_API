import React, { useContext } from 'react'
import { UserContext,  ContactContext} from './ContextFile'
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    const { name, age } = useContext(UserContext);
  return (
    <ContactContext.Provider  value={{randomNumber : age*24}}>
      I am {name} and my age is {age}
      <Link to='insidecontact'>Inside Contact</Link>
      <Link to='insidecontact2'>Inside Contact Second</Link>
      <Outlet />
    </ContactContext.Provider>
  )
}

export default Contact;
