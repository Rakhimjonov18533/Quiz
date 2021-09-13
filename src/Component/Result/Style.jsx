import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const ContextApi = ({children}) =>{

    const [count, setCount] = useState(0)

    return(
        <UserContext.Provider value={{data:[count, setCount]}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextApi
