import React from "react";

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="comment">
                {this.props.title}: {this.props.content}
            </div>
        )
    }
}