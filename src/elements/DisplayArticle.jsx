import { Link, useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
import Loader from './Loader'

export function DisplayArticle(){
    const [ article, setArticle ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const id = useParams();

    useEffect(()=> {
        axios.get(`http://46.17.248.191:3000/knowlege/${id.id}`)
        .then(res => {
            setArticle(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [article])

    return <div className="article-item">
        <div className="content-list">
            <Link to="..">← Назад</Link>
            {loading ? (<Loader />) : (
                <>
                    <h1>{article.title}</h1>
                    <h3>{article.summary}</h3>
                    <p>{article.content}</p>
                </>
            )}
        </div>
    </div>
}