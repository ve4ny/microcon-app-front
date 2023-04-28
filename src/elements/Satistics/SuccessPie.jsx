export default function SuccessPie() {

  return (
    <div className="sc__area__cell" id="successPie">
        <h4>Выполнение в срок <br></br>за последний месяц</h4>
        <div className="pieGrid">
          <svg className="circle-chart" viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#262626" strokeWidth="6" fill="none" cx="50" cy="50" r="40" />
            <circle className="circle-chart__circle" stroke="#B51D4A" strokeWidth="6" strokeDasharray="240, 750" strokeLinecap="round" fill="none" cx="50" cy="50" r="40" />
            <circle className="circle-chart__circle" stroke="#2BA46A" strokeWidth="6" strokeDasharray="220, 750" strokeLinecap="round" fill="none" cx="50" cy="50" r="40" />
            <g className="circle-chart__info">
              <text className="circle-chart__percent" fill="#2BA46A" x="50" y="50" alignmentBaseline="central" textAnchor="middle" fontSize="16">92%</text>
            </g>
          </svg>
        </div>
    </div>
  )
}
