import React from "react";

class Event02 extends React.Component {

    render() {
        const handleChange = (text) => {
            console.log(text);
        };
        
        return (
            <>
                <h1>Unicode Academy</h1>
                <button type="buton" onClick={() => {
                    handleChange('Unicode Academy');
                }}>Change</button>
            </>
        )
    }
}

export default Event02;