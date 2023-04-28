import { Link } from "react-router-dom";

export function Article(props){
    const title = (props.title).toUpperCase();

    return  <Link to={`/knowlege/${props.id}`}>
                <div className="article">
                    <img className="article-img" src={`/images/${props.img}`}/>
                    <h4>{title}</h4>
                    <p>{props.summary}</p>
                </div>
            </Link >
}