import { useEffect, useState } from 'react'
import CallsList from '../elements/CallsList'
import {NewCallButton} from '../elements/NewCallButton'
import NewCall from '../elements/NewCall'

export function Calls(){
    const [role, setRole] = useState("")
    const [street, setStreet] = useState("")

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        setRole(user.role)
    }, [])

    function closeRolling(){
        document.querySelector(".rollingDown").classList.remove("open");
    }

    const handleChange = (value) => {
        setStreet(value);
    }

    return (
        <>  
            {role == "disp" ? <NewCallButton /> : ""}
            <div className="rollingDown">
                <NewCall />
            </div>   
            <CallsList />
           
        </>
    )
}