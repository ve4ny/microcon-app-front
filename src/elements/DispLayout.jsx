import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

export function DispLayout(){
    const [loading, setLoading] = useState(true);
    const [streets, setStreets] = useState([]);

    const { disp } = useParams();
    const dispNames = {
        "blnk" : "БЛ Нижнекамск",
        "bln4" : "БЛ Набережные Челны",
        "liftnk" : "ЛифтНК",
        "lps": "Лифтпромсервис",
        "venec": "Венец+"
    }

    useEffect(() => {
        document.title = dispNames[disp];
        if (disp !== "blnk"){
            alert(`Диспетчерская находится в разработке, поэтому пока не доступна`)
            setStreets([]);
            setLoading(false);
        } 
        else{
            axios.get("http://46.17.248.191:3000/data/" + disp, { params: { "disp": disp } })
                .then(res => {
                    setStreets(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.log(err)
                })
        }
    },[disp])
    
    return(
        <>  
            {loading ? (<Loader />) : (
                <div className="content-list">
                    {streets.map((s) => (
                        <NavLink key={s.street_id} to={s.street_id}>{s.street}</NavLink>
                    ))}
                </div>
            )}
            <Outlet context={disp}/>
        </>
    )
}