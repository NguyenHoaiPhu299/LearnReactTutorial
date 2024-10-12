function Event01() {

    const HandleChange = () => {
        console.log('change');
    }

    const HandleChange1 = (e) => {
        console.log(e.target);
        console.log(e.target.innerText);
    }
    
    return (
        <>
            <h1>Unicode Academy</h1>
            <button type="button" onClick={HandleChange1}>Changes</button>
        </>
    );
}

export default Event01;