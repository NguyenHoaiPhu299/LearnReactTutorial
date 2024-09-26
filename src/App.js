import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Member from './components/Member';
import Comment from './components/Comment';

function App() {

  const info = {
    name: 'Hoài Phú',
    age: 20,
    shippingAddress: 'Hồ Chí Minh'
  };

  const comment = {
    title: 'Subject 01',
    content: 'Comment 01'
  }

  const members = [
    {
      name: 'Hoài Phú',
      age: 20,
      shippingAddress: 'Hồ Chí Minh',
      comments: {
        title: 'comment user Phu',
        content: 'content comment user Phu'
      }
    },

    {
      name: 'Nguyễn Văn A',
      age: 25,
      shippingAddress: 'Đà Nẵng',
      comments: {
        title: 'comment user A',
        content: 'content comment user A'
      }
    },

    {
      name: 'Nguyễn Văn B',
      age: 10,
      shippingAddress: 'Hà Nội',
      comments: {
        title: 'comment user B',
        content: 'content comment user B'
      }
    }
  ];

  const memberList = members.map((item, index) => {
    return (
      <Member
        key={index}
        name={item.name}
        age={item.age}
        shippingAddress={item.shippingAddress}
        comment={<Comment title={item.comments.title} content={item.comments.content}></Comment>}
      ></Member>
    );
  });

  return (
    <>
      <Member 
        name={info.name}
        age={info.age}
        shippingAddress={info.shippingAddress}
        comment={<Comment content={comment.content} title={comment.title}></Comment>}
      ></Member>
      <hr></hr>
      {memberList}
    </>
  );
}

export default App;
