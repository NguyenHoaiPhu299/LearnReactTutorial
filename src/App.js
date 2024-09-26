import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Member} from './components/Member';
import Comment from './components/Comment';

function App() {

  const info = {
    name: 'Hoài Phú',
    age: 20,
    shippingAddress: 'Hồ Chí Minh',
    posts: [
    ]
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
      },
      posts: [
        {
          title: 'Post Phu 01',
          content: 'Content Phu 01'
        },

        {
          title: 'Post Phu 02',
          content: 'Content Phu 02'
        },

        {
          title: 'Post Phu 03',
          content: 'Content Phu 03'
        }
      ]
    },

    {
      name: 'Nguyễn Văn A',
      age: 25,
      shippingAddress: 'Đà Nẵng',
      comments: {
        title: 'comment user A',
        content: 'content comment user A'
      },
      posts: [
        {
          title: 'Post A 01',
          content: 'Content A 01'
        },

        {
          title: 'Post A 02',
          content: 'Content A 02'
        },

        {
          title: 'Post A 03',
          content: 'Content A 03'
        }
      ]
    },

    {
      name: 'Nguyễn Văn B',
      age: 10,
      shippingAddress: 'Hà Nội',
      comments: {
        title: 'comment user B',
        content: 'content comment user B'
      },
      posts: [
        {
          title: 'Post B 01',
          content: 'Content B 01'
        },

        {
          title: 'Post B 02',
          content: 'Content B 02'
        },

        {
          title: 'Post B 03',
          content: 'Content B 03'
        }
      ]
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
        posts = {
          item.posts
        }
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
        posts = {
          info.posts
        }
      ></Member>
      <hr></hr>
      {memberList}
      <hr></hr>
    </>
  );
}

export default App;
