import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Member from './components/Member';
import Comment from './components/Comment';

function App() {
  return (
    <>
      <Member name='Hoai Phu' age='20' shippingAddress='Ho Chi Minh'></Member>
      <Member name='Nguyen Van A' age='21' shippingAddress='Ha Noi'/>
      <Comment content='Comment 1'/>
      <Comment content='Comment 2'/>
    </>
  );
}

export default App;
