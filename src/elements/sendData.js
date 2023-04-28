import axios from "axios";

export default function sendData(formData) {
    console.log(formData)
  axios.post("http://46.17.248.191:3000/data/post-to", {
    disp: formData.disp,
    id: formData.id,
    um: formData.formUm,
    prog: formData.formProg,
    ip: formData.formIp,
    mask: formData.formMask,
    gateway: formData.formGateway,
    toDate: formData.formToDate,
    toComment: formData.formToComment,
    socket: formData.formSocket,
    serial: formData.formSerial,
    volts: formData.formVolts,
    year: formData.formYear
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  }) 
}
