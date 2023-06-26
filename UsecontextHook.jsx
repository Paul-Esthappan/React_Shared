import React from 'react'
import { createContext, useState } from "react";

const usehook = createContext()



function UsecontextHook({children}) {
    const [first, setfirst] = useState("hello")

    const arr = [{name:"Tom", age:17 }, {name:"john", age:15}]
    const [arr2, setarr2] = useState(arr)
    const obj = {name:"Soman", age: 40}

  return (
    <div>
        <usehook.Provider value={{first, setfirst, arr2, obj}}>
            {children}
        </usehook.Provider>
    </div>
  )
}

export default UsecontextHook
export {usehook}