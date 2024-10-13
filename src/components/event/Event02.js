import React from "react";

class Event02 extends React.Component {

    handleChange = () => {
        console.log('Changed');
    }
    
    render() {
        return (
            <>
                <h1>Unicode Academy</h1>
                <button type="buton" onClick={this.handleChange}>Change</button>
            </>
        )
    }
}

export default Event02;