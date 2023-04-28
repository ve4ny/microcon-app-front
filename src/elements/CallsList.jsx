import { useState, useEffect} from 'react'
import Call from './Call'
import Loader from './Loader'

export default function CallsList() {
    const [calls, setCalls] = useState([])
    const [loading, setLoading] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://46.17.248.191:3000/calls');
            const jsonData = await response.json();
            setCalls(jsonData);
            setLoading(false);
            console.log("tick")
        };

        const interval=setInterval(()=>{
            fetchData()
            },10000)
       
       
           return()=>clearInterval(interval)
        
    }, []);

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    }, [window.innerWidth])

    const bgSetter = (id, created_at, taken_at, closed_at) => {
        let element = document.getElementById(id);
        
        let date = Date.parse(new Date());
        let createdDate = Date.parse(created_at)

        if(closed_at != null){
            element.classList.add("closedCall")
        }
        else if(date - createdDate > 3600000){
            element.classList.add("outdateCall")
        }
        else if(taken_at != null){
            element.classList.add("inWorkCall")
        }
        else{
            element.classList.add("newCall")
        }
    }

  return (
    <div className="sc__area__cell" id="problemCalls">
        <div className="problemCalls__table">
          <div className="problemCalls__table__row problemCalls__table__legend">
            <div className="cell cell__date">Дата</div>
            <div className="cell cell__address">Адрес</div>
            <div className="cell cell__text">Заявка</div>
            <div className="cell cell__created">Создана</div>
            {screenWidth >= 800 ? (
                <>
                    <div className="cell cell__accepted">Принята</div>
                    <div className="cell cell__closed">Закрыта</div>
                </>
            ) : ""}

          </div>
          {loading ? (<Loader />) : (
                            
                                calls.map((item) => (
                                    <div key={item.id} id={item.id} className="problemCalls__table__row problemCalls__table__dataRow">
                                        <Call id={item.id}
                                        street={item.address_street} 
                                        house={item.address_house} 
                                        lift={item.address_lift} 
                                        text={item.text}
                                        createdAt={item.created_at}
                                        takenAt={item.taken_at}
                                        closedAt={item.closed_at}
                                        bgSetter={bgSetter}
                                        />
                                    </div>
                                    
                                ))
                            
                )}
        </div>
    </div>
  )
}
