import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, content} = this.props;

        const ShowContent = () => {
            return <p>Demo Content</p>
        }

        return(
            <div className="comment">
                {ShowContent()}
                <ShowContent />
                {title}: {content}
            </div>
        )
    }
}