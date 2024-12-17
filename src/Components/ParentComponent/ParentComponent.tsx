import React, { useContext, useState } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'
import { MyContext } from '../../Context/ContextApi';

function ParentComponent() {
    // lifting up state 
    const [liftedState, setLiftedState] = useState("hello");
        // const value:any = useContext(MyContext)
    
    console.log(liftedState)
    return (
        <>
            ParentComponent
            <ChildComponent sharedState={liftedState} setSharedState={setLiftedState} ></ChildComponent>
            {/* {value} */}
        </>
    )
}

export default ParentComponent
