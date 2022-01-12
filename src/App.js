import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([{ id: 1, value: Math.random() }]);

  const addNewElementToStart = () => {
    const tempArray = [...list];
    const willaddElement = { id: generateUniqueId(), value: Math.random() };
    tempArray.unshift(willaddElement);
    setList(tempArray);
  };

  const generateUniqueId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  return (
    <div className="App-header" style={{ alignItems: 'baseline' }}>
      <div>key equals index</div>
      {list.map((item, index) => (
        <div key={index}>
          <input style={{ marginTop: '10px' }} />
          <label style={{ marginLeft: '10px' }}>{item.value}</label>
        </div>
      ))}
      <hr style={{ width: '100%' }} />
      <div>key equals uniqueId </div>
      {list.map((item) => (
        <div key={item.id}>
          <input style={{ marginTop: '10px' }} />
          <label style={{ marginLeft: '10px' }}>{item.value}</label>
        </div>
      ))}
      <hr style={{ width: '100%' }} />
      <button onClick={addNewElementToStart}> add New Element to start</button>
    </div>
  );
}

export default App;
