
import { useState } from "react";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToForm from './ToForm';
import sendData from './sendData';

export default function Monoblok(liftInfo) {
    const params = useParams()

    const info = liftInfo.liftInfo;

    const [liftData, setLiftData] = useState({
        id: info.id,
        formUm: info.um,
        formProg: info.klsh_prog,
        formIp: info.ip,
        formMask: info.mask,
        formGateway: info.gateway,
        formToDate: info.to_date,
        formToComment: info.to_comment,
        formSerial: info.serial,
        formSocket: info.socket,
        formVolts: info.volts,
        formYear: info.year
    })

    function dateModifier(sqlDate){
        let date = sqlDate.split("-");
        let dateString = date[2].slice(0,2) + "." + date[1] + "." + date[0];
        return dateString;
    }

    function editInfo(){
        document.getElementById("modalTo").style.display = "flex";
    }

    function formSubmit (formContent){
        setLiftData(formContent);
        formContent.id = info.id;
        formContent.disp = params.disp
        sendData(formContent);
    }

  return (
    <div className="liftInfoCard">
        <div className="liftInfoCardColumn">
            <h2>Моноблок</h2>
            <div className="liftInfoCardLine">
                <p>УМ: {liftData.formUm}</p>
                <p> ПО: {liftData.formProg}</p>
                <p>Серийный №: {liftData.formSerial}</p>
                <p>Год выпуска: {liftData.formYear}</p>
            </div>
            <div className="liftInfoCardLine">
                <p>IP: {liftData.formIp}</p>
                <p>Маска: {liftData.formMask}</p>
                <p>Шлюз: {liftData.formGateway}</p>
            </div>
            <div className="liftInfoCardLine" id="to_block">
                    {dateModifier(liftData.formToDate) == "29.11.1899" 
                        ? (<p>ТО не проводилось</p>)
                        : <>
                            <p>Дата ТО: {dateModifier(liftData.formToDate)}</p>
                            <p>Розетка: {liftData.formSocket ? "есть" : "нет"}</p>
                            <p>12v: {liftData.formVolts ? "есть" : "нет"}</p>
                            <p>Комментарий: {liftData.formToComment}</p>
                        </>
                    }
                </div>
            <div className="liftInfoCardLine" id="to_block">
                <button onClick={()=>editInfo()}>Провести ТО</button>
            </div>
        </div>
        <div className="liftInfoCardColumn">
            <h2>Лифтовой блок</h2>
            <div className="liftInfoCardLine">
                <p>Модель: {info.lb}</p>
            </div>
            <div className="liftInfoCardFotoArea">
                <span className="fa-add-photo">Добавить фото <FontAwesomeIcon icon={faSquarePlus} /></span>
            </div>
        </div>
        <ToForm um={info.um} 
        prog={info.klsh_prog} 
        serial={info.serial} 
        ip={info.ip} 
        mask={info.mask} 
        gateway={info.gateway} 
        socket={info.socket} 
        volts={info.volts}
        year={info.year}
        toDate={info.to_date} 
        toComment={info.to_comment} 
        formSubmit={formSubmit} />
    </div>
  )
}
