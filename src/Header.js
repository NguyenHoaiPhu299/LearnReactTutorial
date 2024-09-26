import React from "react";

function Header() {
    const firstProvince = 2;

    const styleElement = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    }

    const myAlert = () => {
        alert('Unicode Academy');
    };

    const myAlert1 = (name) => {
        alert('Unicode Academy ' + name);
    };

    const welcomeContent = 'Khóa học lập trình tại unicode';

    return (
        <>
            {/* <h1 class='title'>UNICODE LEARNING</h1> */}
            <h1 className='title'>UNICODE LEARNING</h1>
            
            {/* <label for='username'></label> */}
            <label htmlFor='username'>user: </label>

            {/* <input type='text' name='username' value='hoangan.web'></input> */}
            <input type='text' id='username' name='username' defaultValue='hoangan.web'></input>

            <div>
                <select>
                    <option value='0'>Chọn tỉnh thành</option>
                    <option value={firstProvince}>Chọn tỉnh thành</option>
                </select>
            </div>

            {/* <div className='element' style='color: red'>Khóa học React</div> */}
            <div className='element' style={{color: 'red', fontWeight:'bold'}}>Khóa học React</div>
            <div className='element' style={styleElement}>Khóa học React</div>
            {/* Cặp ngoặc ngoài cùng dùng để truyền giá trị, cặp ngoặc bên trong là một object */}

            {/* <button type='button' onclick='functionName()'>Nhấn vào đây</button> */}
            <button type='button' onClick={myAlert}>Alert</button>
            {/* <button type='button' onClick={myAlert1()}>Alert</button> */}

            <p className='unicode'>{welcomeContent}</p>

            <div>
                {/* Hello world */}
                <div className="awesome" style={{ border: "1px solid red" }}>
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" id="name" />
                </div>
                <p>Enter your HTML here</p>
            </div>

        </>
    );
}

export default Header;
