import { NavLink, Outlet } from 'react-router-dom'

export function DataLayout(){
    
    return  (
                <>  
                    <div className="content-list">
                        <NavLink to="/data/blnk">БЛ Нижнекамск</NavLink> 
                        <NavLink to="/data/bln4">БЛ Набережные Челны</NavLink> 
                        <NavLink to="/data/liftnk">Лифт НК</NavLink> 
                        <NavLink to="/data/lps">Лифтпромсервис</NavLink> 
                        <NavLink to="/data/venec">Венец+</NavLink> 
                    </div>
                    <Outlet />
            </>
    )
}