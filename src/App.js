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

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const stateMemo = [...memos];
    stateMemo[selectedMemoIndex] = newMemo;
    setMemos(stateMemo);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
