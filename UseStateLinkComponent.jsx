import React, { useContext } from 'react'
import { usehook } from './UsecontextHook'

function UseStateLinkComponent() {
    const elements = useContext(usehook)
    const {first, setfirst, arr2, setarr2, obj} = elements
  return (
    <div>
        <h1 style={{color:'blue'}}>
            {obj.name} {obj.age}
        </h1>
            {arr2.map((dis)=>
            <h2 style={{color:'GrayText'}}>{dis.age} {dis.name}
            </h2>
            )}
            <h1 style={{color:'red'}}>{first}</h1>
            <button style={{backgroundColor:'purple'}} onClick={()=>setfirst("Hello World")}  >Click</button>
    </div>
  )
}

export default UseStateLinkComponent