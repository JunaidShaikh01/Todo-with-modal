import Button from "./Button";
import Cards from "./Cards";
import "./Error.css";
function Error(prors) {
  return (
    <div>
      <div className="backdrop" onClick={prors.onConfirm}>
        <Cards className="modal">
          <header className="header">
            <h2>{prors.title}</h2>
          </header>
          <div className="content">
            <p>{prors.message}</p>
          </div>
          <footer className="action">
            <Button onClisk={prors.onConfirm}>OKay</Button>
          </footer>
        </Cards>
      </div>
    </div>
  );
}

export default Error;
