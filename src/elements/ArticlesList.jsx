import { useEffect, useState } from "react";
import { Article } from "./Article";
import Loader from './Loader'


export function ArticlesList(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('http://46.17.248.191:3000/knowlege');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        };
        fetchData();
    }, []);


        return(
            <>
                {loading ? (<Loader />) : (
                            <div className="content-list">
                                {data.map((item) => (
                                        <Article key={item.id} id={item.id} title={item.title} img={item.img} summary={item.summary}/>
                                ))}
                            </div>
                )}
            </>
        )
}