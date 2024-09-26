import Avatar from "./Avartar";
import Comment from "./Comment";
import MemberInfo from "./MemberInfo";
import Posts from "./Posts";

function Member1(props) {
    console.log(props)
    return (
        <div className='member-box'>
            <h2>Tên: {props.name}</h2>
            <p>Tuổi: {props.age}</p>
            <p>Địa chỉ giao hàng: {props.shippingAddress}</p>
            Comment: {props.comment}
            <Posts />
        </div>
    );
}

function Member({name, age, shippingAddress, comment, posts}) {
    return (
        <div className='member-box'>
            <h2>Tên: {name}</h2>
            <p>Tuổi: {age}</p>
            <p>Địa chỉ giao hàng: {shippingAddress}</p>
            Comment: {comment}
            <Posts posts={posts}/>
        </div>
    );
}

export default Member;