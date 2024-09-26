function Comment(props){
    return(
        <div className="comment">
            <p>{props.title}: {props.content}</p>
        </div>
    )
};

export default Comment;