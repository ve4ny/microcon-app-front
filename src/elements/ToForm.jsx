import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ToForm({um, prog, ip, mask, gateway, toDate, toComment, formSubmit, serial, socket, volts, year}) {
    const [formUm, setFormUm] = useState(um);
    const [formProg, setFormProg] = useState(prog);
    const [formIp, setFormIp] = useState(ip);
    const [ formMask, setFormMask] = useState(mask);
    const [ formGateway, setFormGateway ] = useState(gateway);
    const [ formToDate, setFormToDate] = useState(toDate);
    const [ formToComment, setFormToComment] = useState(toComment);
    const [ formSerial, setFormSerial] = useState(serial);
    const [ formSocket, setFormSocket] = useState(socket);
    const [ formVolts, setFormVolts ] = useState(volts)
    const [ formYear, setFormYear] = useState(year)

    function closeModal(){
        document.getElementById("modalTo").style.display = "none";
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formContent = {formUm, formProg, formIp, formMask, formGateway, formToDate, formToComment, formSerial, formSocket, formVolts, formYear}
        formSubmit(formContent)
        closeModal();
    }

    const handleSocketChange = () => {
        setFormSocket(!formSocket);
      };

      const handleVoltsChange = () => {
        setFormVolts(!formVolts);
      };
    

  return (
    <div id="modalTo">
            <div className="modal-content">
                <span id="close-modal" onMouseDown={()=>closeModal()}><FontAwesomeIcon icon={faXmark} /></span>
                    <form id="toForm" onSubmit={handleSubmit}>
                        <div className="formColumn">
                            <h3>Общие</h3>
                            <fieldset>
                                <label>УМ: <input id="um" type="text" value={formUm} onChange={e=>{setFormUm(e.target.value)}}/></label>
                                <label>ПО: <input id="prog" type="text" value={formProg} onChange={e=>{setFormProg(e.target.value)}}/></label>
                            </fieldset>
                            <h3>Сетевые настройки</h3>
                            <fieldset>
                                <label>Ip: <input id="ip" type="text" value={formIp} onChange={e=>{setFormIp(e.target.value)}}/></label>
                                <label>Mask: <input id="mask" type="text" value={formMask} onChange={e=>{setFormMask(e.target.value)}}/></label>
                                <label>Gateway: <input id="gateway" type="text" value={formGateway} onChange={e=>{setFormGateway(e.target.value)}}/></label>
                            </fieldset>
                        </div>
                        <div className="formColumn">
                            <h3>Технический осмотр</h3>
                            <fieldset>
                                <label>Серийный номер: <input id="serial" type="text" value={formSerial} onChange={e =>{setFormSerial(e.target.value)}}></input></label>
                                <label>Год выпуска: <input type="text" value={formYear} onChange={e =>{setFormYear(e.target.value)}}/></label>
                                <label>Розетка:      
                                        <input type="checkbox" name="socket" checked={formSocket} onChange={handleSocketChange}/> 
                                </label>
                                <label>12 вольт:      
                                        <input type="checkbox" name="volts" checked={formVolts} onChange={handleVoltsChange}/> 
                                </label>
                                <label>Дата ТО: <input id="to_date" type="date" value={formToDate} onChange={e=>{setFormToDate(e.target.value)}} /></label>
                                <label>Комментарий: <textarea id="to_comment" value={formToComment} onChange={e=>{setFormToComment(e.target.value)}}type="textarea"/></label>
                            </fieldset>
                        </div>
                        <button>Submit</button>
                    </form>
            </div>
        </div>
  )
}
