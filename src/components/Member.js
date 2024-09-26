import Avatar from "./Avartar";
import Comment from "./Comment";
import MemberInfo from "./MemberInfo";

function Member() {
    return (
        <div className='member-box'>
            <Avatar></Avatar>
            <MemberInfo></MemberInfo>
            <Comment></Comment>
        </div>
    );
}

export default Member;