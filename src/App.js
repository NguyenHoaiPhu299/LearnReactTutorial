import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Member from './components/Member';

function App() {
  return (
    <>
      <Member name='Hoai Phu' age='20' shippingAddress='Ho Chi Minh'></Member>
      <Member name='Nguyen Van A' age='21' shippingAddress='Ha Noi'/>
    </>
  );
}

export default App;
