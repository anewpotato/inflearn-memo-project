import './index.css';

export default function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter__add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
}
