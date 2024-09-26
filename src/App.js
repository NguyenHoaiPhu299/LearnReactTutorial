import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  function Member() {
    return (
      <div className='member'>
        <h2>Nguyễn Hoài Phú</h2>
        <p>Tuổi: 20</p>
      </div>
    );
  }
  
  return (
    <>
      <Member />
      <Member></Member>
    </>
  );
}

export default App;
