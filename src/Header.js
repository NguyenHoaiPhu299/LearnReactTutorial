import React from "react";

function Header() {
    const element = React.createElement(
        'h1', // Wanted tag
        {classNam: 'block'}, // Property
        'Hello World!' // Content of tag
    );

    const element1 = React.createElement(
        'div', // Wanted tag
        {classNam: 'block'}, // Property
        React.createElement(
            'h2',
            {
                className: 'sub-title',
                id: 'sub-title'
            },
            'Khóa học ReactJS'
        )
    );

    const element2 = React.createElement(
        'div', // Wanted tag
        {classNam: 'block'}, // Property
        React.createElement(
            'h2',
            {
                className: 'title',
                id: 'sub-title'
            },
            'Khóa học ReactJS'
        ),
        React.createElement(
            'h3',
            {
                className: 'sub-title',
                id: 'sub-title'
            },
            'Unicode Academy'
        ),
        React.createElement(
            'p',
            {
                className: 'text',
            },
            React.createElement(
                'a',
                {
                    href: 'https://unicode.vn',
                    target: '_blank',
                    className: 'text--link',
                    title: 'Đăng ký khóa học'
                },
                'Đăng ký ngay'
            )
        )
    );

    const element3 = React.createElement(
        'div',
        {},
        React.createElement(
            'div', // Wanted tag
            {classNam: 'block'}, // Property
            React.createElement(
                'h2',
                {
                    className: 'title',
                    id: 'sub-title'
                },
                'Khóa học ReactJS'
            ),
            React.createElement(
                'h3',
                {
                    className: 'sub-title',
                    id: 'sub-title'
                },
                'Unicode Academy'
            ),
            React.createElement(
                'p',
                {
                    className: 'text',
                },
                React.createElement(
                    'a',
                    {
                        href: 'https://unicode.vn',
                        target: '_blank',
                        className: 'text--link',
                        title: 'Đăng ký khóa học'
                    },
                    'Đăng ký ngay'
                )
            )
        ),
        React.createElement(
            'div',
            {
                className: 'element'
            },
            'Khóa học lập trình tại Unicode'
        )
    );

    return (
        <div>
            {element}
            <hr></hr>
            {element1}
            <hr></hr>
            {element2}
            <hr></hr>
            {element3}
        </div>
    );
}

export default Header;
