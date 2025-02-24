import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'memo 1',
      content: 'This is Memo 1',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
    {
      title: 'memo 2',
      content: 'This is Memo 2',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
