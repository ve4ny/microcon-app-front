import MonthCharts from "../elements/Satistics/MonthCharts"
import SuccessPie from "../elements/Satistics/SuccessPie"
import SuccessCharts from "../elements/Satistics/SuccessCharts"
import CallsQuantity from "../elements/Satistics/CallsQuantity"
import ProblemCalls from "../elements/Satistics/ProblemCalls"

export function Statistics(){
    return <div className="sc"> 
        <div className="sc__area">
            <CallsQuantity />
            <MonthCharts />
            <SuccessPie />
            <SuccessCharts />
        </div>
        <ProblemCalls />
    </div>
}