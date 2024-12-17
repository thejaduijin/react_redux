import React, { useContext } from 'react'
// import { MyContext } from '../../Context/ContextApi'

function ChildComponent(props: any) {
    // const value:any = useContext(MyContext)
    return (
        <div>
            ChildComponent
            <input type="text"
                value={props.sharedState}
                onChange={(e: any) => props.setSharedState(e.target.value)}
            />
            {/* <div>{value}</div> */}
        </div>
    )
}

export default ChildComponent
