import Avatar from "./Avartar";
import Comment from "./Comment";
import MemberInfo from "./MemberInfo";

function Member(props) {
    return (
        <div className='member-box'>
            <h2>Tên: {props.name}</h2>
            <p>Tuổi: {props.age}</p>
            <p>Địa chỉ giao hàng: {props.shippingAddress}</p>
            <p>Comment: {props.comment}</p>
        </div>
    );
}

export default Member;