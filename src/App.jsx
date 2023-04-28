import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { Statistics } from './pages/Statistics'
import { User } from './pages/User'
import { Knowlege} from './pages/Knowlege'
import { Schedule } from './pages/Schedule'
import { Calls } from './pages/Calls'
import { Nav } from './elements/Nav'
import { NewDisp } from './pages/NewDisp'
import { NotFound } from './pages/NotFound'
import { DataLayout } from './elements/DataLayout'
import { DispLayout } from './elements/DispLayout'
import { StreetLayout } from './elements/StreetLayout'
import { HouseLayout } from './elements/HouseLayout'
import { LiftLayout } from './elements/LiftLayout'
import { DisplayArticle } from './elements/DisplayArticle'
import { NewArticle } from './elements/NewArticle' 
import { useAuthState, useAuthUsername, useAuthFullname, useAuthRole } from './atoms'
import { useEffect } from 'react'

export default function App() {
  const [isAuth, setIsAuth] = useAuthState("AuthState")
  const [username, setUsername] = useAuthUsername("AuthUsername")
  const [role, setRole] = useAuthRole("AuthRole")
  const [fullname, setFullname] = useAuthFullname("AuthFullname")

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    if(user){
      setIsAuth(user.isAuth)
      setUsername(user.username)
      setFullname(user.fullname)
      setRole(user.role)
    }
  },[])

    return (
      <>
        <Nav username={username} role={role} fullname={fullname}/>
          <div className="content">
          <Routes>
            <Route path='/' element={<Navigate to="/login"/>}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/user' element={<User />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/knowlege'>
              <Route index element={<Knowlege />} />
              <Route path='/knowlege/new' element={<NewArticle />} />
              <Route path=':id' element={<DisplayArticle />} />
            </Route>
            <Route path='/data' element={<DataLayout />} >
              <Route path=':disp' element={<DispLayout />}>
                <Route path=':street' element={<StreetLayout />}>
                  <Route path=':house' element={<HouseLayout />}>
                    <Route path=':lift' element={<LiftLayout />}>
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route path='new' element={<NewDisp />} />  
            </Route>
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/calls' element={<Calls />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          </div>
      </>
    )
}
