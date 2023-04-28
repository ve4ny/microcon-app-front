import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function MonthCharts() {

  const [ data, setData ] = useState([50, 75, 64, 80])

  useEffect(()=>{
    const elements = document.querySelectorAll(".month_chart");
    Array.from(elements).map(function(element, i){
      element.dataset.content = data[i];
        element.style.marginBottom = `${data[i]}px`
        setTimeout(()=>{
          gsap.to(element, {
            opacity: 1,
            duration: 1,
          })
        }, i*500)
    })
}, [])

  return (
    <div className="sc__area__cell charts__cell" id="monthCharts">
        <h4>Количество заявок <br></br> по месяцам</h4>
        <div className="monthCharts__table">
          <div className="month_chart" id="monthChart1"></div>
          <div className="month_chart" id="monthChart2"></div>
          <div className="month_chart" id="monthChart3"></div>
          <div className="month_chart" id="monthChart4"></div>
        </div>
        <div className="months">
          <span>янв</span><span>фев</span><span>мар</span><span>апр</span>
        </div>
    </div>
  )
}
