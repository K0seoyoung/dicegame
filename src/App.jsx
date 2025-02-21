import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [MyHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...MyHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setMyHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherHistory([]);
  };

  return (
    <div>
      <Button color='blue' onClick={handleRollClick}>던지기</Button>
      <Button color='red' onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" gameHistory={MyHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
