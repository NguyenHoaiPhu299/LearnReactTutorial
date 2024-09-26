function Comment(props){
    return(
        <div className="comment">
            {props.title}: {props.content}
        </div>
    )
};

export default Comment;