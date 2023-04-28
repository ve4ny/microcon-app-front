import { useRef, useEffect } from "react"
import { gsap } from "gsap";

export default function CallsQuantity() {
    const newCallsRef = useRef();
    const inWorkRef = useRef();
    const outdateRef = useRef();

    useEffect(()=>{
        let newCalls = 1;
        let inWork = 1;
        let outdate = 1;
     

        gsap.to(newCallsRef.current, {
            textContent: newCalls,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
        gsap.to(inWorkRef.current, {
            textContent: inWork,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
        gsap.to(outdateRef.current, {
            textContent: outdate,
            duration: 1.5,
            ease: 'Power1.easeIn',
            snap: { textContent: 1 },
            stagger: 1,
        })
    }, [])

  return (
    <div className="sc__area__cell callsQuantity">
        <h4>Заявки</h4>
        <div className="callsQuantity__data">
            <div className="callsQuantity__data__line">
                <span className="text">Новые</span>
                <span className="number" id="newPersCalls" ref={newCallsRef}>0</span>
            </div>
            <div className="callsQuantity__data__line">
                <span className="text">В работе</span>
                <span className="number" id="inWorkPersCalls" ref={inWorkRef}>0</span>
            </div>
            <div className="callsQuantity__data__line">
                <span className="text">Просроченные</span>
                <span className="number" id="outdatePersCalls" ref={outdateRef}>0</span>
            </div>
        </div>
    </div>
  )
}
