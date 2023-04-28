import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function LbPro(liftInfo) {

    const info = liftInfo.liftInfo;

    function dateModifier(sqlDate){
        let date = sqlDate.split("-");
        let dateString = date[2].slice(0,2) + "." + date[1] + "." + date[0];
        return dateString;
    }

  return (
    <div className="liftInfoCard">
        <div className="liftInfoCardColumn">
            <h2>ЛБ Pro</h2>
            <div className="liftInfoCardLine">
                <p>Модель:  <span className="editable" id="lb">{info.lb}</span></p>
                <p>ID: <span className="editable" id="lbpro_id">{info.lbpro_id}</span></p>
                <p>ПО: <span className="editable" id="lbpro_prog">{info.lb_prog}</span></p>
            </div>
            <div className="liftInfoCardLine">
                <p>IP: <span className="editable" id="ip">{info.ip}</span></p>
                <p>Маска: <span className="editable" id="mask">{info.mask}</span></p>
                <p>Шлюз: <span className="editable" id="gateway">{info.gateway}</span></p>
            </div>
            <div className="liftInfoCardLine" id="to_block">
                {dateModifier(info.to_date) == "30.11.1899" 
                    ? (<p>ТО не проводилось</p>)
                    : <>
                        <p>Дата ТО: <span className="editable" id="to_date">{dateModifier(info.to_date)}</span></p>
                        <p>Комментарий: <span className="editable" id="to_comment">{info.to_comment}</span></p>
                    </>
                }
            </div>
            <div className="liftInfoCardLine" id="to_block">
            <button >Провести ТО</button>
        </div>
        </div>
        <div className="liftInfoCardColumn">
            <div className="liftInfoCardLine" id="foto_block">
                <span className="fa-add-photo">Добавить фото <FontAwesomeIcon icon={faSquarePlus} /></span>
            </div>
        </div>
    </div>
  )
}
