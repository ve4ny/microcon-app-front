import { NavLink, Outlet, useParams, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios'

export function StreetLayout(props){
    const [loading, setLoading] = useState(true);
    const [houses, setHouses] = useState([]);

    const { street } = useParams();
    const disp = useOutletContext();

    useEffect(() => {
        axios.get("http://46.17.248.191:3000/data/" + disp + "/" + street)
            .then(res => {
                setHouses(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err)
            })
    },[street]);

    return  (
        <>  
            {loading ? (<Loader />) : (
                <div className="content-list">
                    {houses.map((h) => (
                        <NavLink key={h.house_id} to={h.house_id}>{h.house}</NavLink>
                    ))}
                </div>
            )}
            <Outlet context={[disp, street]}/>
        </>
    )
}