import React from 'react'
import { UserContext } from './ContextFile'
const NoteContext = (props) => {
  return (
    <UserContext.Provider value={{name: 'Sakshi Singh', age: 24}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default NoteContext;
