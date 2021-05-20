import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot =
    typeof document !== "undefined" ? document.getElementById("portal") : null;

const Portal = ({ children }) => {
    const el =
        typeof document !== "undefined" ? document.createElement("div") : null;

    useEffect(() => {
        portalRoot.appendChild(el);
        return () => {
            portalRoot.removeChild(el);
        };
    }, [el]);

    return el ? ReactDOM.createPortal(children, el) : null;
};

export default Portal;
