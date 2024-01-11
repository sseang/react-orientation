//to use state you need hooks
import {useState} from 'react';



//function Card({globaName}) {

function Card(props) {
  const [myName, setMyName] = useState('Sarith');
  const [num, setNum] = useState(0);
  //props.globalName

  function clickChangeName() {
    //confirm function
    console.log('Test Name');
    
    //set name to new name
    setMyName('SARITH');

  }
  const clickCounter = () => {
    //confirm function
    console.log('Test Number');
    //set increments
    setNum(num+1);
  }

    return (
      <div className="card">
        {/*create state to incerement the count */}
        
        {/* add p tag to wrap */}
        <p>{num}</p>
        <button onClick={clickCounter}>Count is 0</button>
        <p>{props.globalName ? props.globalName : myName}</p>
        <button onClick={clickChangeName}>Change Name</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
  }
  
export default Card;