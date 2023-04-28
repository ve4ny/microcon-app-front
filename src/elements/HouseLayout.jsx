import { useState, useEffect } from "react";
import { useParams, useOutletContext, NavLink, Outlet } from "react-router-dom"
import axios from 'axios'
import Loader from './Loader'

export function HouseLayout(){
    const [loading, setLoading] = useState(true);
    const [lifts, setLifts] = useState([]);

    const [disp, street] = useOutletContext()
    const { house } = useParams();

    useEffect(() => {
        axios.get("http://46.17.248.191:3000/data/" + disp + "/" + street + "/" + house, 
            { params: 
                { "disp": disp, 
                "street": street, 
                "house" : house } 
            }).then(res => {
                setLifts(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err)
            })
    },[house])

    return <>
                {loading ? (<Loader />) : (
                    <div className="content-list">
                        {lifts.map((l) => (
                            <NavLink key={l.id} to={String(l.id)}>
                                { l.klsh == 1
                                ? (`п. ${l.podezd} (Моноблок)`) 
                                : (l.lbpro_id != ""
                                    ? (`п. ${l.podezd} (ЛБ Pro)`) 
                                    : (`п. ${l.podezd}`))
                                }</NavLink>
                        ))}
                    </div>
                )}
                <Outlet context={[disp, street, house]}/>
            </>
}