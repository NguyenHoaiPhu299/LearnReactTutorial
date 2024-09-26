import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Member from './components/Member';
import Comment from './components/Comment';

function App() {
  return (
    <>
      <Member 
        name='Hoai Phu' 
        age='20' 
        shippingAddress='Ho Chi Minh'
        comment={<Comment content='Comment 01' title='Subject 01'></Comment>}
      ></Member>
    </>
  );
}

export default App;
