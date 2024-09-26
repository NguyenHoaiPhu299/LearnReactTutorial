import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.name = 'Hoai Phu';
    }

    ShowContent1 () {
        console.log(this.name);
    }

    ShowContent = () => {
        console.log(this.name);
    }

    render() {
        const {title, content} = this.props;

        return(
            <div className="comment">
                {this.ShowContent()}
                {title}: {content}
                <button type='button' onClick={this.ShowContent1}>Click</button>
            </div>
        )
    }
}