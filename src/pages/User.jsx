import { useAuthState, useAuthUsername, useAuthRole, useAuthFullname } from "../atoms";
import SuccessPie from "../elements/Satistics/SuccessPie"
import SuccessCharts from "../elements/Satistics/SuccessCharts"
import PersonalCallsQuantity from "../elements/Satistics/PersonalCallsQuantity"
import UserPic from "../elements/UserPic";

export function User() {
    const [isAuth, setIsLogged] = useAuthState();
    const [username, setUsername] = useAuthUsername();
    const [fullname, setFullname] = useAuthFullname();
    const [role, setRole] = useAuthRole();

    const roles = {
        disp: "Диспетчер",
        svyazist: "Связист",
        director: "Директор",
        admin: "Администратор",
        demo: "Наблюдатель"
    }

  return (
    <div>
        <div className="uc">
            <div className="uc__column">
                <div className="uc__block uc__userInfo">
                    <UserPic />
                    <h4>{fullname}</h4>
                    <p>{roles[role]}</p>
                </div>
                <div className="uc__block uc__userSetings">
                    <h3>Настройки</h3>
                    <p>Настройка 1</p>
                    <p>Настройка 2</p>
                    <p>Настройка 3</p>
                </div>
            </div>
            <div className="uc__column">
                <div className="uc__block uc__userStatistics">
                    <h3>Личные показатели</h3>
                    <div className="uc__area">
                        <PersonalCallsQuantity />
                        <SuccessPie />
                        <SuccessCharts />
                    </div>
                    <h3>Работа с заявками</h3>
                    <div className="problemCalls__table">
                        <div className="userProblemCalls__table__row problemCalls__table__legend">
                            <div className="cell cell__address">Адрес</div>
                            <div className="cell cell__text">Заявка</div>
                            <div className="cell cell__created">Создана</div>
                            <div className="cell userCell__action">Действие</div>
                        </div>
                        <div className="userProblemCalls__table__row userProblemCalls__table__dataRow newCall">
                            <div className="cell cell__address">Корабельная, д.13 п.2</div>
                            <div className="cell userCell__text">Плохо слышно пассажира из кабины </div>
                            <div className="cell cell__created">13:00</div>
                            <div className="cell userCell__action">Принять</div>
                        </div>
                        <div className="userProblemCalls__table__row userProblemCalls__table__dataRow inWorkCall">
                            <div className="cell cell__address">Корабельная, д.13 п.2</div>
                            <div className="cell userCell__text">Плохо слышно пассажира из кабины </div>
                            <div className="cell cell__created">13:00</div>
                            <div className="cell userCell__action">Закрыть</div>
                        </div>
                        <div className="userProblemCalls__table__row userProblemCalls__table__dataRow outdateCall">
                            <div className="cell cell__address">Корабельная, д.13 п.2</div>
                            <div className="cell userCell__text">Плохо слышно пассажира из кабины </div>
                            <div className="cell cell__created">13:00</div>
                            <div className="cell userCell__action">Закрыть</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
