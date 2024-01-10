//to use state you need hooks
import {useState} from 'react';

function Card() {
  const [myName, setMyName] = useState('Sarith');

  function clickChangeName() {
    //set name to new name
    console.log('Test Name');
    setMyName('SARITH');

  }


    return (
      <div className="card">
        <button>count is 0</button>
        <p>{myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
  }
  
  export default Card;