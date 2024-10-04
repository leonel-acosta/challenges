import StarIcon from "./StarIcon.jsx"
import StarIconFilled from "./StarIconFilled.jsx"

export default function Comment(props){
    return(
        <>
        <div className="comment__card">
            <h3 className="comment__date"> {props.date} </h3>
            <div className="title__holder">
                <h3 className="comment__title">{props.title}</h3>
                {props.favourite ? <StarIconFilled/>: <StarIcon/>}
            </div>
            <p className="comment__content">{props.comment}</p>
            <hr/>
        </div>
        </>
    )
}