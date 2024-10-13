function Event01() {

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }
    
    return (
        <>
            <h1>Unicode Academy</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="username" placeholder="Username..."/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Event01;