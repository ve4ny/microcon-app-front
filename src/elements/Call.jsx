import { useState, useEffect } from "react"

export default function Call(props) {
    const [street, setStreet] = useState(props.street)
    const [house, setHouse] = useState(props.house)
    const [lift, setLift] = useState(props.lift)
    const [text, setText] = useState(props.text)
    const [createdAtDay, setCreatedAtDay] = useState("")
    const [createdAtTime, setCreatedAtTime] = useState("")
    const [takenAt, setTakenAt] = useState("")
    const [closedAt, setClosedAt] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const color = "red";

    useEffect(()=>{
        function dateModifier(sqlDate){
            let date = sqlDate.split("-");
            let dateString = date[2].slice(0,2) + "." + date[1];
            let timeString = date[2].slice(3,8);
            return Array([dateString], [timeString]);
        }
        setCreatedAtDay(dateModifier(props.createdAt)[0])
        setCreatedAtTime(dateModifier(props.createdAt)[1])
        props.takenAt ? setTakenAt(dateModifier(props.takenAt)[1]) : setTakenAt("-");
        props.closedAt ? setClosedAt(dateModifier(props.closedAt)[1]) : setClosedAt("-");

        props.bgSetter(props.id, props.createdAt, props.takenAt, props.closedAt)

    },[])

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    }, [window.innerWidth])

  return (
    <>
        <div className="cell cell__date">{createdAtDay}</div>
        <div className="cell cell__address">{street} {house ? `, д.${house}` : "" } {lift ?  `, п.${lift}`: ", весь дом"}</div>
        <div className="cell cell__text">{text}</div>
        <div className="cell cell__created">{createdAtTime}</div>
        {screenWidth >= 800 ? (
            <>
                <div className="cell cell__accepted">{takenAt}</div>
                <div className="cell cell__closed">{closedAt}</div>
            </>
        ): ""}

    </>
  )
}
