import { useState, useEffect } from "react"
import { gsap } from "gsap";

export default function SuccessCharts() {
  const [data, setData] = useState([72, 82, 49, 92])

  useEffect(()=>{
    const elements = document.querySelectorAll(".success_chart");
    const tips = document.querySelectorAll(".tip");
    Array.from(elements).map(function(element, i){
        tips[i].innerHTML = data[i];
        if (data[i] < 50) {
          element.style.backgroundColor = "#B51D4A"
          tips[i].style.backgroundColor = "#B51D4A"
        }
        else if(data[i] < 75){
          element.style.backgroundColor = "#b7a456"
          tips[i].style.backgroundColor = "#b7a456"
        }
        element.setAttribute("value", data[i])
        gsap.to(element, {
            height: data[i],
            duration: 1.5,
            ease: 'Power2.easeInOut',
        })
    })
  }, [])

  return (
    <div className="sc__area__cell charts__cell" id="successCharts">
    <h4>Выполнение в срок <br></br>по месяцам</h4>
    <div className="successCharts__table">
        <div className="success_chart"><div className="tip"></div></div>
        <div className="success_chart"><div className="tip"></div></div>
        <div className="success_chart"><div className="tip"></div></div>
        <div className="success_chart"><div className="tip"></div></div>
    </div>
    <div className="months">
          <span>янв</span><span>фев</span><span>мар</span><span>апр</span>
        </div>
</div>
  )
}
