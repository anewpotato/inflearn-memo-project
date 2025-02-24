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

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos((prev) => [
      ...prev,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const stateMemo = [...memos];
    stateMemo.splice(index, 1);
    setMemos(stateMemo);

    if (index === selectedMemoIndex) setSelectedMemoIndex(0);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
