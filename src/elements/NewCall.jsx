import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function NewCall() {
    const [ streets, setStreets ] = useState([])
    const [ selectedStreet, setSelectedStreet] = useState("")
    const [ houses, setHouses ] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/calls/streets');
            const jsonStreets = await response.json();
            setStreets(jsonStreets);
        };
        fetchData();
    }, [])

    const onStreetChange = (e) => {
        const index = e.target.value;
        const streetName = document.getElementById("street" + e.target.value).innerHtml
        setSelectedStreet({id : e.target.value, street_name : streetName})
        console.log(index)
        axios.get('http://localhost:3000/calls/' + index)
        .then(res => {
            console.log(res.data)
            setHouses(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
            <div className="rollingDownInner">
                <span id="rollingUp" onMouseDown={()=>closeRolling()}><FontAwesomeIcon icon={faXmark} /></span>
                <form id="callForm" className="columns-2">
                    <div className="w-full px-1 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Улица
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={onStreetChange}
                            value={selectedStreet.street_name}
                            >
                                <option>Выберите улицу</option>
                            {streets.map((item) => {
                                let id = "street" + item.street_id
                                return <option key={item.street_id} value={item.street_id} id={id}>{item.street_name}</option>
                            })}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-1 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Дом
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Вся улица</option>
                            {houses.map((item) => {
                                return <option key={item.house_id}>{item.house}</option>
                            })}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Лифт
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Текст заявки
                        </label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
  )
}
