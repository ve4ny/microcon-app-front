import { useRef, useEffect } from "react"
import { gsap } from "gsap";

export default function CallsQuantity() {
    const weekRef = useRef();
    const dayRef = useRef();
    const monthRef = useRef();

    useEffect(()=>{
        let day = 8;
        let week = 35;
        let month = 96;
     

        gsap.to(dayRef.current, {
            textContent: day,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
        gsap.to(weekRef.current, {
            textContent: week,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
        gsap.to(monthRef.current, {
            textContent: month,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
    }, [])

  return (
    <div className="sc__area__cell callsQuantity">
        <h4>Количество заявок</h4>
        <div className="callsQuantity__data">
            <div className="callsQuantity__data__line">
                <span className="text">Сегодня</span>
                <span className="number" id="counter-day" ref={dayRef}>0</span>
            </div>
            <div className="callsQuantity__data__line">
                <span className="text">За неделю</span>
                <span className="number" id="counter-week" ref={weekRef}>0</span>
            </div>
            <div className="callsQuantity__data__line">
                <span className="text">За месяц</span>
                <span className="number" id="counter-month" ref={monthRef}>0</span>
            </div>
        </div>
    </div>
  )
}
