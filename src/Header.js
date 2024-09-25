import React from "react";

function Header() {
    return (
        <div>
            <div className='Block'>
                <h2 className='title' id='title'>Khóa học ReactJS</h2>
                <h3 className='sub-title' id='sub-title'>Unicode Academy</h3>
                <p className='text'>
                    <a href='https://unicode.vn' className='text--link'
                    target='_blank' title='Đăng ký khóa học'>Đăng ký ngay</a>
                </p>
            </div>
            <div className='element'>Khóa học lập trình tại Unicode</div>
        </div>
    );
}

export default Header;
