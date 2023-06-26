import React, { useContext } from 'react'
import { usehook } from './UsecontextHook'

function UseStatehookLinkPage() {

    const dis = useContext(usehook)
    const {first, setfirst, arr2, setarr2, obj} = dis

  return (
    <div>
        <h3>{first}</h3>
        <button onClick={()=>setfirst("It worked")}>Click</button>
        {
            arr2.map((disp)=>
            <h3>{disp.name} {disp.age}</h3>

            )
        }

        <h1>{obj.name} {obj.age}</h1>

      
    </div>
    
  )
}

export default UseStatehookLinkPage