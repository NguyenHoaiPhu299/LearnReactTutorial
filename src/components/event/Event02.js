import React from "react";

class Event02 extends React.Component {

    constructor() {
        super();

        this.handleChange = (text) => {
            console.log(text);
        }
    }

    render() {
        return (
            <>
                <h1>Unicode Academy</h1>
                <button type="buton" onClick={() => {
                    this.handleChange('Unicode Academy');
                }}>Change</button>
            </>
        )
    }
}

export default Event02;