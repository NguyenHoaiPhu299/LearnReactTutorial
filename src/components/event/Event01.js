function Event01() {

    const HandleChange = (text) => {
        console.log(text);
    }
    
    return (
        <>
            <h1>Unicode Academy</h1>
            <button type="button" onClick={HandleChange()}>Changes</button>
            <button type="button" onClick={(e) => {console.log(e)}}>Changes</button>
            <button type="button" onClick={(e) => {e.preventDefault(); HandleChange('Unicode')}}>Changes</button>
        </>
    );
}

export default Event01;