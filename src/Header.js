import React from "react";

function getProduct(product) {
    // Sử dụng if
    if (product.status === 1) {
        return (
            <>
                <p>ID: {product.id}</p>
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>

                {/* Sử dụng toán tử 3 ngôi */}
                <p>Status: {product.status == 1 ? 'Kích hoạt' : 'Chưa kích hoạt'}</p>
                <p>
                    Status: {
                        product.status == 1 ?
                        <span className='unactive'>Kích hoạt</span> :
                        <span className='active'>Chưa kích hoạt</span>
                    }
                </p>
            </>
        );
    }
}

const product = {
    id: 1,
    name: 'Sản phẩm 1',
    price: 12000,
    description: 'Mô tả sản phẩm 1',
    status: 1
};

const productList = [
    {
        id: 1,
        name: 'Sản phẩm 1',
        price: 12000
    },

    {
        id: 2,
        name: 'Sản phẩm 2',
        price: 15000
    },

    {
        id: 3,
        name: 'Sản phẩm 3',
        price: 17000
    },

    {
        id: 4,
        name: 'Sản phẩm 4',
        price: 19000
    }
];

// Sử dụng vòng lặp
const list = productList.map((item, index) => {
    return (
        <div key={index}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <hr/>
        </div>
    )
});

function Header() {
    return (
        <>
            {getProduct(product)}
            <hr/>
            <h2>Danh sách sản phẩm</h2>
            {list}
        </>
    );
}

export default Header;
