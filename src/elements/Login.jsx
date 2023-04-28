import { useState, useEffect } from "react";
import { useAuthState, useAuthUsername, useAuthRole, useAuthFullname } from "../atoms";
import { useNavigate } from "react-router-dom";
import login from "../services/auth-service";
import logo from '../assets/logo_s.png'


export default function Login() {
    const [userInfo, setUserInfo] = useAuthState(false);
    const [username, setUsername] = useAuthUsername("");
    const [fullname, setFullname] = useAuthFullname("");
    const [role, setRole] = useAuthRole("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const showError = (errors) => {
        const mandatory = document.querySelector(".mandatory")
        mandatory.append("Пожалуйста, введите логин и пароль")
        errors.forEach((error) =>{
        error.classList.add("shake");
        setTimeout(() => {
            error.classList.remove("shake");
        }, 1000);
        });
      }

    const handleFocus = (e) => {
        document.querySelector(".mandatory").innerHTML = '';
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let errors = [];
        console.log(errors)
        if (username == ""){
            errors.push(document.querySelector("#login"));
        }
        if (password == ""){
            errors.push(document.querySelector("#password"));
        }
        console.log(errors)
        if(errors.length > 0){
            showError(errors);
        } else {
            login(username, password).then(
                user => {
                    if(user.username){
                        setUserInfo(true)
                        setUsername(user.username)
                        setFullname(user.fullname)
                        setRole(user.role)
                        sessionStorage.setItem("user", JSON.stringify({isAuth: true, username: user.username, role:user.role, fullname: user.fullname}))
                        navigate("/user")
                    }
                    else{
                        console.log("Пользователь не найден")
                    }
                }
            );
        }
    }

    const demoLogin = (e) => {
        sessionStorage.setItem("user", JSON.stringify({isAuth: true, username: "demo", role: "demo", fullname: "Режим демонстрации"}))
        setUserInfo(true)
        setUsername("demo")
        setFullname("Режим демонстрации")
        setRole("demo")
        navigate("/user")
    }

  return (
    <>
        <img className="loginLogo" src={logo} alt="Логотип компани Микрокон" />
        <form id="loginForm" onSubmit={handleLogin}>
            <fieldset>
                <label>Имя пользователя:</label>
                <input id="login" type="text" onChange={(e) => setUsername(e.target.value)} onFocus={(e)=> handleFocus()}/>
                <label>Пароль:</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} onFocus={(e)=> handleFocus()}/>
            </fieldset>
            <p className="mandatory"></p>
            <div className="buttons-set">            
                <button className="loginButton" id="loginButton" type="submit">Войти</button>
                <button className="loginButton" id="demoButton" onClick={demoLogin}>Демо</button>
            </div>

        </form>
    </>
  )
}


