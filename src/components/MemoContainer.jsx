export default function MemoContainer() {
  return (
    <div className="MemoContainer">
      <div>
        <input type="text" className="MemoContainer__title" />
      </div>
      <div>
        <textarea className="MemoContainer__content" />
      </div>
    </div>
  );
}
