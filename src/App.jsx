import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((prev) => {
        const stateMemo = [...prev];
        stateMemo[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', stateMemo);

        return stateMemo;
      });
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    setMemos((prev) => {
      const now = new Date().getTime();
      const newMemo = [
        ...prev,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];
      debouncedSetItem('memo', newMemo);

      return newMemo;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((prev) => {
        const stateMemo = [...prev];
        stateMemo.splice(index, 1);
        setItem('memo', stateMemo);

        return stateMemo;
      });

      if (index === selectedMemoIndex) setSelectedMemoIndex(0);
    },
    [selectedMemoIndex],
  );

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
