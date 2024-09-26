import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    ShowContent = () => {
        return <p>Demo Content</p>
    }

    render() {
        const {title, content} = this.props;

        return(
            <div className="comment">
                {this.ShowContent()}
                {title}: {content}
            </div>
        )
    }
}