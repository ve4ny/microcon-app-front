import { useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import { useAuthState, useAuthUsername, useAuthFullname, useAuthRole } from '../atoms';

export default function UserInfo(props) {
    const [isAuth, setIsAuth] = useAuthState();
    const [username, setUsername] = useAuthUsername();
    const [fullname, setFullname] = useAuthFullname("AuthFullname");
    const [role, setRole] = useAuthRole()
    const navigate = useNavigate();

    const roles = {
        disp: "Диспетчер",
        svyazist: "Связист",
        director: "Директор",
        admin: "Администратор",
        demo: "Наблюдатель"
    }
    
    const logoutButtonHandle =(e) =>{
        sessionStorage.clear();
        setIsAuth(false);
        setRole("")
        navigate("/login")
    }
    
    return (
        <>
                {isAuth ? 
                    (<section className="userInfo-area">
                        <div className="user-pic" style={{backgroundImage: `url("/images/users/${username}-min.jpg")`}}></div>
                        <h4>{fullname}</h4>
                        <p>{roles[role]}</p>
                    </section>)
                    : (<>
                    </>)
                }
        </>
    )
}
