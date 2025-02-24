import './index.css';

export default function MemoItem({
  children,
  onClick,
  onClickDelete,
  isSelected,
}) {
  return (
    <div
      className={`${'MemoItem' + (isSelected ? ' selected' : '')}`}
      onClick={onClick}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}
