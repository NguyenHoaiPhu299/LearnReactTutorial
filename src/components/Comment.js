import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, content} = this.props;
        return(
            <div className="comment">
                {title}: {content}
            </div>
        )
    }
}