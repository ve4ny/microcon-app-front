import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faImage, faTrash} from "@fortawesome/free-solid-svg-icons"

export default function UserPic() {
    const [username, setName] = useState("")
    const [role, setRole] = useState("")
    const [buttons, setButtons] = useState("")

    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        setName(user.username)
        setRole(user.role)

        if (role !== "demo"){
            setButtons(
                <div className="uc__userPic__overlay">
                    <div className="overlay__dashboard">                    
                        <FontAwesomeIcon icon={faImage} id="editPic" onClick={handleEdit} />
                        <FontAwesomeIcon icon={faTrash} id="deletePic" onClick={handleDelete} />
                    </div>
                </div>
            )
        }
    }, [])

    const handleEdit= (e) => {
        console.log("clickEdit")
    }

    const handleDelete= (e) => {
        console.log("clickDelete")
    }

  return (
    <div 
    className="uc__userPic" 
    style={{backgroundImage: `url("/images/users/${username}.jpg")`}}>
        {buttons}
    </div>
  )
}
