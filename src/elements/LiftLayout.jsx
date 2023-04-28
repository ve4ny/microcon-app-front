import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Loader from './Loader'
import Monoblok from './Monoblok'
import LbPro from './LbPro'

export function LiftLayout() {
    const [liftInfo, setLiftInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const lift = useParams()

    useEffect(() => {
        axios.get("http://46.17.248.191:3000/data/" + lift.disp + "/" + lift.street + "/" + lift.house + "/" + lift.lift)
        .then(res => {
            setLiftInfo(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }, [lift])

    return (
        <>
            {loading ? (<Loader />) 
            : ( 
                liftInfo.klsh == 1
                    ? <Monoblok liftInfo={liftInfo}  />
                    : (liftInfo.lbpro_id != "" 
                        ? <LbPro liftInfo={liftInfo}/>
                        : (<div className="liftInfoCard">
                                <div className="liftInfoCardColumn">
                                    <h2>Лифтовой блок</h2>
                                    <div className="liftInfoCardLine">
                                        <p>Модель: {liftInfo.lb}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                )
            }
        </>
    )
}