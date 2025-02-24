import MemoItem from './MemoItem';

export default function MemoList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}
