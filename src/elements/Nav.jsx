import { useNavigate, NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react'
import logo from '../assets/logo_s.png'
import UserInfo from "../elements/UserInfo"
import { useAuthRole } from '../atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartSimple, faBook, faServer, faBell, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

export function Nav(props){
    const [role, setRole] = useAuthRole("AuthRole");
    const [username, setUsername] = useState("")
    const [menu, setMenu] = useState("")
    const [fullname, setFullname] = useState("")
    const [windowWidth, setWindowWidth] = useState("")

    const navigate = useNavigate()

    const logoutButtonHandle =(e) =>{
        sessionStorage.clear();
        console.log(sessionStorage.getItem("user"))
        setRole("")
        navigate("/login")
    }

    useEffect(()=>{
        setRole(props.role)
        setWindowWidth(window.innerWidth)
        setUsername(props.username)
        setFullname(props.fullname)
        if(role === "admin"){
            setMenu(
                <nav>
                    <div className="nav-content">
                        <div className="nav-top">
                            <img className="navLogo" src={logo} alt="Логотип компани Микрокон" />
                            <ul>
                                <li><NavLink to="/statistics"><FontAwesomeIcon icon={faChartSimple}/>Статистика</NavLink> </li>
                                <li><NavLink to="/knowlege"><FontAwesomeIcon icon={faBook}/>База знаний</NavLink></li>
                                <li><NavLink to="/data"><FontAwesomeIcon icon={faServer}/>Данные</NavLink></li>
                                <li><NavLink to="/calls"><FontAwesomeIcon icon={faBell}/>Заявки</NavLink></li>
                                <li><NavLink to="/user"><FontAwesomeIcon icon={faGear} />Профиль</NavLink></li>
                                <li onClick={logoutButtonHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} />Выход</li>
                            </ul>
                        </div>
                        <UserInfo role={role} username={username} fullname={fullname}/>
                    </div>
                </nav>
            )
        }
        else if(role === "director"){
            setMenu(
                <nav>
                    <div className="nav-content">
                        <div className="nav-top">
                            <img src={logo} alt="Логотип компани Микрокон" />
                            <ul>
                                <li><NavLink to="/statistics"><FontAwesomeIcon icon={faChartSimple}/>Статистика</NavLink> </li>
                                <li><NavLink to="/knowlege"><FontAwesomeIcon icon={faBook}/>База знаний</NavLink></li>
                                <li><NavLink to="/data"><FontAwesomeIcon icon={faServer}/>Данные</NavLink></li>
                                <li><NavLink to="/calls"><FontAwesomeIcon icon={faBell}/>Заявки</NavLink></li>
                                <li><NavLink to="/user"><FontAwesomeIcon icon={faGear} />Профиль</NavLink></li>
                                <li onClick={logoutButtonHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} />Выход</li>
                            </ul>
                        </div>
                        <UserInfo />
                    </div>
                </nav>
            )
        }
        else if( role === "svyazist"){
            setMenu(
                <nav>
                    <div className="nav-content">
                        <div className="nav-top">
                            <img src={logo} alt="Логотип компани Микрокон" />
                            <ul>
                                <li><NavLink to="/knowlege"><FontAwesomeIcon icon={faBook}/>База знаний</NavLink></li>
                                <li><NavLink to="/data"><FontAwesomeIcon icon={faServer}/>Данные</NavLink></li>
                                <li><NavLink to="/calls"><FontAwesomeIcon icon={faBell}/>Заявки</NavLink></li>
                                <li><NavLink to="/user"><FontAwesomeIcon icon={faGear} />Профиль</NavLink></li>
                                <li onClick={logoutButtonHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} />Выход</li>
                            </ul>
                        </div>
                        <UserInfo />
                    </div>
                </nav>
            )
        }
        else if( role === "disp"){
            setMenu(
                <nav>
                    <div className="nav-content">
                        <div className="nav-top">
                            <img src={logo} alt="Логотип компани Микрокон" />
                            <ul>
                                <li><NavLink to="/calls"><FontAwesomeIcon icon={faBell}/>Заявки</NavLink></li>
                                <li><NavLink to="/user"><FontAwesomeIcon icon={faGear} />Профиль</NavLink></li>
                                <li onClick={logoutButtonHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} />Выход</li> 
                            </ul>
                        </div>
                        <UserInfo />
                    </div>
                </nav>
            )
        }
        else if (role === "demo"){
            setMenu(
                <nav>
                    <div className="nav-content">
                        <div className="nav-top">
                            <img src={logo} alt="Логотип компани Микрокон" />
                            <ul>
                                <li><NavLink to="/statistics"><FontAwesomeIcon icon={faChartSimple}/>Статистика</NavLink> </li>
                                <li><NavLink to="/knowlege"><FontAwesomeIcon icon={faBook}/>База знаний</NavLink></li>
                                <li><NavLink to="/data"><FontAwesomeIcon icon={faServer}/>Данные</NavLink></li>
                                <li><NavLink to="/calls"><FontAwesomeIcon icon={faBell}/>Заявки</NavLink></li>
                                <li><NavLink to="/user"><FontAwesomeIcon icon={faGear} />Профиль</NavLink></li>
                                <li onClick={logoutButtonHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} />Выход</li>                            </ul>
                        </div>
                        <UserInfo />
                    </div>
                </nav>
            )
        }
        else{
            setMenu("");
        }
    }, [role])

    return <>
        {menu}
    </>
}