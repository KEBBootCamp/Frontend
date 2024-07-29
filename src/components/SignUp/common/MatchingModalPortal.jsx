import ReactDOM from "react-dom";

function MatchingModalPortal({ children }) {
    const el = document.getElementById("matching-modal");
    return ReactDOM.createPortal(children, el);
}

export default MatchingModalPortal;
